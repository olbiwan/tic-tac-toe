module.exports = class TicTacToe {

    board = {
        '1,1': null, '1,2': null, '1,3': null,
        '2,1': null, '2,2': null, '2,3': null,
        '3,1': null, '3,2': null, '3,3': null
    }

    constructor(input, output) {
        this.input = input
        this.output = output
    }

    start = () => {
        // A player has a maximum of 4,5 moves.
        for(let moves = 0; moves < 5; moves++) for(let player of ["X", "O"]) {
            let messageEndGame = this.play(player)
            if(messageEndGame) {
                this.output(messageEndGame)
                return
            }
        }
    }

    play = player => {
        // Waits for a valid move.
        while(true) {
            let position = { line: this.readInput(player, "line"), column: this.readInput(player, "column") }
            if(0 < position.line && position.line < 4 && 0 < position.column && position.column < 4 && this.board[`${position.line},${position.column}`] == null) {
                this.board[`${position.line},${position.column}`] = player
                this.drawBoard()
                return this.checkEndGame(player)
            }
            this.output("Invalid position, try again!")
        }
    }

    readInput = (player, location) => this.input(`Player '${player}' it's your turn, enter your position (${location}): `)

    drawBoard = () =>
        [1, 2, 3].forEach(line => {
            [1, 2, 3].forEach(column => {
                let player = this.board[`${line},${column}`]
                process.stdout.write(`${player ?? " "}${column != 3 ? " | " : "\n"}`)
            })
        })

    // If there is a winner or a tie, a message will be sent back.
    checkEndGame = player =>
        this.checkWinColumnOrLine(player) || this.checkWinDiagonal(player) ? `Player ${player} won!!!` : Object.values(this.board).some(value => value == null) ? null : "There was no winner."

    checkWinColumnOrLine = player => [1, 2, 3].some(fixed => [1, 2, 3].every(column => this.board[`${fixed},${column}`] === player)
                                                          || [1, 2, 3].every(line => this.board[`${line},${fixed}`] === player))

    // If the center belongs to the player then check the corner squares.
    checkWinDiagonal = player =>
        this.board['2,2'] == player && ((this.board['1,1'] == player && this.board['3,3'] == player) ||
                                        (this.board['1,3'] == player && this.board['3,1'] == player))

}