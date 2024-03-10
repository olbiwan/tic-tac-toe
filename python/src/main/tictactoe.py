from enum import Enum
from python_utils import converters
from typing import Optional

class TicTacToe:
    def __init__(self, input, output):
        # Represents the squares on the Tic-tac-toe board.
        self.BOARD = {(i, j): None for i in range(1, 4) for j in range(1, 4)} 
        self.input = input
        self.output = output

    # Represents the players and an empty position.
    class Player(Enum):
        X = 'X'
        O = 'O'

    def start(self):
        # A player has a maximum of 4,5 moves.
        for _ in range(1, 6):
            for player in self.Player:
                message_end_game = self.play(player)
                if message_end_game:
                    self.output(message_end_game)
                    return

    def play(self, player: Player) -> Optional[str]:
        # Waits for a valid move.
        while True:
            row, column = converters.to_int(self.read_input(player, "row")), converters.to_int(self.read_input(player, "column"))
            if 0 < row < 4 and 0 < column < 4 and self.BOARD.get((row, column)) is None:
                self.BOARD[(row, column)] = player
                self.draw_board()
                return self.check_end_game(player)
            self.output("Invalid position, try again!")

    def read_input(self, player: Player, location: str):
        return self.input(f"Player '{player.value}' it's your turn, enter your position ({location}): ")

    def draw_board(self):
        for i in range(1, 4):
            for j in range(1, 4):
                self.output(f" {' ' if self.BOARD[(i, j)] is None else self.BOARD[(i, j)].value} ", end=('|' if j != 3 else '\n'))

    # If there is a winner or a tie, a message will be sent back.
    def check_end_game(self, player: Player):
        if self.check_win_column_or_line(player) or self.check_win_diagonal(player):
            return f"Player {player.value} won!!!"
        return None if None in self.BOARD.values() else "There was no winner."

    def check_win_column_or_line(self, player: Player):
        return any(all(self.BOARD[(fixed, column)] == player for column in range(1, 4)) or all(self.BOARD[(line, fixed)] == player for line in range(1, 4)) for fixed in range(1, 4))

    # If the center belongs to the player then check the corner squares.
    def check_win_diagonal(self, player: Player):
        return self.BOARD[(2, 2)] == player and (
                        (self.BOARD[(1, 1)] == player and self.BOARD[(3, 3)] == player) or
                        (self.BOARD[(1, 3)] == player and self.BOARD[(3, 1)] == player)
                )


if __name__ == '__main__':
    TicTacToe(lambda message: input(message), lambda message, end=None: print(message, end=end)).start()