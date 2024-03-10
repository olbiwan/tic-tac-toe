package com.github.olbiwan.tictactoe;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.PrintStream;
import java.util.Scanner;

import static org.mockito.Mockito.*;

class TicTacToeTest {

    @BeforeEach
    void setUp() {
        System.setOut(mock(PrintStream.class));
    }

    @Test
    void givenTicTacToe_whenInvalidMove_thenWarnPlayer() {
        playWithPositions("Player O won!!!", "2","2", "m","1", "1","1", "3","3", "1","2", "3","2", "1","23", "1","3");
    }

    @Test
    void givenTicTacToe_whenNoWinner_thenSayThereWasNoWinner() {
        playWithPositions("There was no winner.", "1","1", "2","2", "3","1", "2","1", "2","3", "1","3", "3","3", "3","2", "1","2");
    }

    @Test
    void givenTicTacToe_whenWinColumn_thenSayPlayerWon() {
        playWithPositions("Player O won!!!", "1","1", "1","2", "2","1", "2","2", "3","3", "3","2");
        playWithPositions("Player X won!!!", "1","1", "1","2", "2","1", "2","2", "3","1");
    }

    @Test
    void givenTicTacToe_whenWinDiagonal_thenSayPlayerWon() {
        playWithPositions("Player O won!!!", "2","1", "1","1", "3","1", "2","2", "1","2", "3","3");
        playWithPositions("Player X won!!!", "1","1", "2","1", "2","2", "3","1", "3","3");
    }

    @Test
    void givenTicTacToe_whenWinLine_thenSayPlayerWon() {
        playWithPositions("Player O won!!!", "2","2", "1","1", "3","3", "1","2", "3","2", "1","3");
        playWithPositions("Player O won!!!", "1","1", "2","2", "1","2", "3","3", "1","3");
    }

    private void playWithPositions(final String messageEndGame, final String position, final String... positions) {
        final Scanner scanner = when(mock(Scanner.class).next()).thenReturn(position, positions).getMock();
        new TicTacToe(scanner::next, System.out::print).start();
        verify(System.out).print(messageEndGame);
    }

}