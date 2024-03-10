from enum import Enum
from python_utils import converters
from typing import Optional

class TicTacToePython:
    def __init__(self, input, output):
        # Represents the squares on the Tic-tac-toe board.
        self.BOARD = {
            (1, 1): None, (1, 2): None, (1, 3): None,
            (2, 1): None, (2, 2): None, (2, 3): None,
            (3, 1): None, (3, 2): None, (3, 3): None
        }
        self.input = input
        self.output = output

    # Represents the players and an empty position.
    class Player(Enum):
        X = 'X'
        O = 'O'

    def main(self):
        # A player has a maximum of 5 moves.
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

    def check_end_game(self, player: Player):
        if self.check_win_line(player) or self.check_win_column(player) or self.check_win_diagonal(player):
            return f"Player {player.value} won!!!"
        return None if None in self.BOARD.values() else "There was no winner."

    def check_win_line(self, player: Player):
        return any(all(self.BOARD[(i, j)] == player for j in range(1, 4)) for i in range(1, 4))

    def check_win_column(self, player: Player):
        return any(all(self.BOARD[(i, j)] == player for i in range(1, 4)) for j in range(1, 4))

    # If the center belongs to the player then check the corner squares.
    def check_win_diagonal(self, player: Player):
        return self.BOARD[(2, 2)] == player and (
                        (self.BOARD[(1, 1)] == player and self.BOARD[(3, 3)] == player) or
                        (self.BOARD[(1, 3)] == player and self.BOARD[(3, 1)] == player)
                )


if __name__ == '__main__':
    TicTacToePython(lambda message: input(message), lambda message, end=None: print(message, end=end)).main()