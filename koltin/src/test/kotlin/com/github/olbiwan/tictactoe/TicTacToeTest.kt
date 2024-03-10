package com.github.olbiwan.tictactoe

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.mockito.Mockito.mock
import org.mockito.Mockito.`when`
import java.util.*

class TicTacToeTest {

    @Test
    fun `Given tic-Tac-toe When invalid move Then warn player`() = playWithPositions("Player O won!!!", "2","2", "m","1", "1","1", "3","3", "1","2", "3","2", "1","23", "1","3")

    @Test
    fun `Given tic-tac-toe When no winner Then say there was no winner`() = playWithPositions("There was no winner.", "1","1", "2","2", "3","1", "2","1", "2","3", "1","3", "3","3", "3","2", "1","2")

    @Test
    fun `Given tic-tac-toe When win column Then say player won`() {
        playWithPositions("Player O won!!!", "1", "1", "1", "2", "2", "1", "2", "2", "3", "3", "3", "2")
        playWithPositions("Player X won!!!", "1", "1", "1", "2", "2", "1", "2", "2", "3", "1")
    }

    @Test
    fun `Given tic-tac-toe Whe win diagonal Then say player won`() {
        playWithPositions("Player O won!!!", "2", "1", "1", "1", "3", "1", "2", "2", "1", "2", "3", "3")
        playWithPositions("Player X won!!!", "1", "1", "2", "1", "2", "2", "3", "1", "3", "3")
    }

    @Test
    fun `Given tic-tac-toe When win line Then say player won`() {
        playWithPositions("Player O won!!!", "2","2", "1","1", "3","3", "1","2", "3","2", "1","3")
        playWithPositions("Player X won!!!", "1","1", "2","2", "1","2", "3","3", "1","3")
    }

    private fun playWithPositions(messageEndGame: String, position: String, vararg positions: String) {
        val scanner: Scanner = `when`(mock<Scanner>().next()).thenReturn(position, *positions).getMock()
        TicTacToe ({ scanner.next() }, { if(it.contains("won") || it.contains("winner")) assertEquals(messageEndGame, it) }).start()
    }

}