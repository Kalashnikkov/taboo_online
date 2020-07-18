import random


class Player:
    def __init__(self, points: int):
        self.points = points


class Turn:
    def __init__(self, current_word: str, current_speaker: Player, answered_players: list, unanswered_players: list):
        self.current_word = current_word
        self.current_speaker = current_speaker
        self.answered_players = answered_players
        self.unanswered_players = unanswered_players


def get_words(file_name: str):
    words_list = []
    file = open(file_name, "r")
    for line in file:
        line = line.rstrip('\n')
        line = line.split(',')
        words_list.append(line)

    file.close()
    return words_list


def random_word_and_taboo_words(words_list: list):
    random_index = random.randint(0, len(words_list) - 1)
    random_line = words_list[random_index]
    return random_line


def next_player(player_list: list, previous_index: int):
    current_index = (previous_index + 1) % len(player_list)
    return player_list[current_index]


def is_correct(current_turn: Turn, guess: str, guessing_player: Player, time_left: int, total_time: int):
    if current_turn.current_word == guess.lower():
        guessing_player.points += (time_left/total_time) * 100
        current_turn.answered_players.append(Player)
        current_turn.unanswered_players.remove(Player)
        current_turn.current_speaker.points += (time_left/total_time) * 100
        return True
    else:
        return False


def has_all_answered(current_turn: Turn):
    if len(current_turn.unanswered_players) == 0:
        return True
    else:
        return False


the_file_name = "mockWords.txt"
the_whole_list = get_words(the_file_name)

for the_list in the_whole_list:
    print(the_list)



