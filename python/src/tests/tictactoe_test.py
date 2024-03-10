import unittest

from io import StringIO
from main.tictactoe import TicTacToe
from unittest.mock import patch

class TicTacToeTest(unittest.TestCase):

    def test_invalid_move(self):
        self.play_with_positions("Player O won!!!", "2","2", "m","1", "1","1", "3","3", "1","2", "3","2", "1","23", "1","3")

    def test_no_winner(self):
        self.play_with_positions("There was no winner.", "1","1", "2","2", "3","1", "2","1", "2","3", "1","3", "3","3", "3","2", "1","2")

    def test_win_column(self):
        self.play_with_positions("Player O won!!!", "1","1", "1","2", "2","1", "2","2", "3","3", "3","2")
        self.play_with_positions("Player X won!!!", "1","1", "1","2", "2","1", "2","2", "3","1")

    def test_win_diagonal(self):
        self.play_with_positions("Player O won!!!", "2","1", "1","1", "3","1", "2","2", "1","2", "3","3")
        self.play_with_positions("Player X won!!!", "1","1", "2","1", "2","2", "3","1", "3","3")

    def test_win_line(self):
        self.play_with_positions("Player O won!!!", "2","2", "1","1", "3","3", "1","2", "3","2", "1","3")
        self.play_with_positions("Player X won!!!", "1","1", "2","2", "1","2", "3","3", "1","3")

    def play_with_positions(self, message_end_game, *positions):
        with patch('builtins.input', side_effect=list(positions)):
            with patch('sys.stdout', new_callable=StringIO) as mock_stdout:
                TicTacToe(lambda message: input(message), lambda message, end=None: print(message, end=end)).start()
                self.assertTrue(message_end_game in mock_stdout.getvalue())


if __name__ == '__main__':
    unittest.main()