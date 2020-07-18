from asyncio import Event
from typing import Dict, List


class Player:
    def __init__(self, name: str):
        self.name: str = name
        self.points: int = 0

class Session:
    def __init__(self, id_: str, name: str):
        self.host: str = name
        self.id_: str = id_
        self.participants: Dict[str, Player] = {}
        self.started = Event()
        self.current_turn = None

