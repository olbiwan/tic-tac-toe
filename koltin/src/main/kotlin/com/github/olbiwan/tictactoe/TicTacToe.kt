package com.github.olbiwan.tictactoe

import java.awt.Point
import java.util.*

/**
 * @param output displayed messages
 */
class TicTacToe(private val input: () -> String?, private val output: (message: String) -> Unit) {

    // Represents the squares on the Tic-tac-toe board.
    private val board = mutableMapOf <Point, Player?> (
        Point(1, 1) to null, Point(1, 2) to null, Point(1, 3) to null,
        Point(2, 1) to null, Point(2, 2) to null, Point(2, 3) to null,
        Point(3, 1) to null, Point(3, 2) to null, Point(3, 3) to null
    )

    // Represents the players and an empty position.
    enum class Player { X, O }

    fun start() {
        // A player has a maximum of 5 moves.
        endLoop@ for (i in 1..5) for (player in Player.values()) {
            val messageEndGame = play(player)
            if (messageEndGame != null) {
                output(messageEndGame)
                break@endLoop
            }
        }
    }

    private fun play(player: Player): String? {

        // Waits for a valid move.
        while(!board.replace(Point(readInput(player, "row"), readInput(player, "column")), null, player)) output("Invalid position, try again!\n")

        drawBoard()

        return checkEndGame(player)

    }

    private fun readInput(player: Player, location: String): Int {
        output("Player '$player' it's your turn, enter your position ($location): ")
        // Disregard non-numeric characters.
        return (input.invoke() ?: "0").replace("[^0-9]".toRegex(), "0").toInt()
    }

    private fun drawBoard() = (1 until 4).forEach { line -> (1 until 4).forEach { column -> output(" ${board[Point(line, column)] ?: " "} ${if (column == 3) "\n" else "|"}") } }

    private fun checkEndGame(player: Player) = if(checkWinLine(player) || checkWinColumn(player) || checkWinDiagonal(player)) "Player $player won!!!" else if(board.containsValue(null)) null else "There was no winner."

    private fun checkWinLine(player: Player) = (1 until 4).any { line -> (1 until 4).all { column -> player == board[Point(line, column)] } }

    private fun checkWinColumn(player: Player) = (1 until 4).any { column -> (1 until 4).all { line -> player == board[Point(line, column)] } }

    // If the center belongs to the player then check the corner squares.
    private fun checkWinDiagonal(player: Player) = player == board[Point(2, 2)] && ((player == board[Point(1, 1)]) && (player == board[Point(3, 3)]) ||
                                                                                    (player == board[Point(1, 3)]) && (player == board[Point(3, 1)]))

}

fun main() = Scanner(System.`in`).use { TicTacToe( { it.next() }, { print(it) } ).start() }