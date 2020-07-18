from asyncio import Event, wait_for, sleep, FIRST_COMPLETED, Queue, TimeoutError
from json import dumps
from typing import Dict, List
import time

from functions import is_correct, random_word_and_taboo_words, words_list, get_words
from models import Player, Session

ROUND_TIME: int = 60


class Turn:
    def __init__(self, current_speaker: Player, session: Session):
        self.current_speaker: Player = current_speaker
        self.session = session
        session.current_turn = self
        self.time_left = ROUND_TIME
        self.started_at = time.time()
        self.reset()
    def reset(self):
        self.answers = Queue()
        words: List[str] = random_word_and_taboo_words(words_list)
        self.current_word = words[0]
        self.taboo_words = words[1:]
        now = time.time()
        self.time_left -= now - self.started_at
        self.started_at = now

async def timer_routine() -> None:
    await sleep(delay=60)
    return None

async def answered(turn: Turn) -> Player:
    return await turn.answers.get()

async def run_turn(turn: Turn, socket):
    while True:
        await socket.emit("words", {
            "correct": turn.current_word,
            "banned": turn.taboo_words
        }, to=turn.current_speaker.sid)
        try:
            player = await wait_for(answered(turn), timeout=turn.time_left)
            await socket.emit("guessed", {"name": player.name})
            turn.reset()
            continue
        except TimeoutError:
            print("Timed out")
            break

async def lobby(session: Session, socket):
    await session.started.wait()
    print(f"Started session {session.id_}")
    for p in session.participants.keys():
        player: Player = session.participants[p]
        turn: Turn = Turn(player, session)
        await socket.emit("round_started", room=session.id_)
        await socket.emit("speaker", to=player.sid)
        await run_turn(turn, socket)
        await socket.emit("round_ended", {p.name:p.points for p in session.participants.values()}, room=session.id_)

async def answer(session: Session, guess: str, name: str) -> bool:
    player = session.participants[name]
    if is_correct(session.current_turn, guess, player, session.current_turn.time_left, ROUND_TIME):
        await session.current_turn.answers.set(player)
        return True
    return False

