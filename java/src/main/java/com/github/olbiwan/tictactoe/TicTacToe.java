package com.github.olbiwan.tictactoe;

import lombok.AllArgsConstructor;
import lombok.experimental.ExtensionMethod;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;

import java.awt.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Scanner;
import java.util.function.Consumer;
import java.util.function.Supplier;

import static java.util.Arrays.stream;
import static java.util.stream.IntStream.range;
import static org.apache.commons.lang3.StringUtils.SPACE;

@ExtensionMethod({NumberUtils.class, StringUtils.class})
@AllArgsConstructor
public class TicTacToe {

    private Supplier<String> input;
    private Consumer<String> output;

    // Represents the squares on the Tic-tac-toe board.
    private final Map<Point, Player> board = new HashMap<>() {{ range(1, 4).forEach(row -> range(1, 4).forEach(column -> put(new Point(row, column), null))); }};

    // Represents the players.
    private enum Player { X, O }

    public static void main(String[] args) {
        try(final var scanner = new Scanner(System.in)) {
            new TicTacToe(scanner::next, System.out::print).start();
        }
    }

    public void start() {
        // A player has a maximum of 5 moves.
        range(1, 6).boxed().flatMap(i -> stream(Player.values()))
                   .map(this::play)
                   .filter(Objects::nonNull)
                   .findFirst()
                   .ifPresent(output);
    }

    private String play(final Player player) {
        // Waits for a valid move.
        while(!board.replace(new Point(readInput(player, "row"), readInput(player, "column")), null, player)) output.accept("Invalid position, try again!\n");

        drawBoard();

        return checkEndGame(player);
    }

    private int readInput(final Player player, final String location) {
        output.accept(String.format("Player '%s' it's your turn, enter your position (%s): ", player, location));
        // Disregard non-numeric characters.
        return input.get().defaultIfBlank("0").replacePattern("[^0-9]", "0").createInteger();
    }

    private void drawBoard() {
        range(1, 4).forEach(line -> range(1, 4).forEach(column -> output.accept(String.format(" %s " + (column == 3 ? "%n" : "|"), Objects.toString(board.get(new Point(line, column)), SPACE)))));
    }

    // If there is a winner or a tie, a message will be sent back.
    private String checkEndGame(final Player player) {
        return checkWinColumnOrLine(player) || checkWinDiagonal(player) ? String.format("Player %s won!!!", player) : board.containsValue(null) ? null : "There was no winner.";
    }

    private boolean checkWinColumnOrLine(final Player player) {
        return range(1, 4).anyMatch(fixed -> range(1, 4).allMatch(column -> player.equals(board.get(new Point(fixed, column))))
                                          || range(1, 4).allMatch(line -> player.equals(board.get(new Point(line, fixed)))));
    }

    // If the center belongs to the player then check the corner squares.
    private boolean checkWinDiagonal(final Player player) {
        return player.equals(board.get(new Point(2, 2))) && (player.equals(board.get(new Point(1, 1))) && player.equals(board.get(new Point(3, 3)))) ||
                                                            (player.equals(board.get(new Point(1, 3))) && player.equals(board.get(new Point(3, 1))));
    }

}