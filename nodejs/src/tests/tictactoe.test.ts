const TicTacToe = require("../main/TicTacToe.ts")

playWithPositions = (plays, messages) => {

    let input = jest.fn();
    plays.forEach(position => input.mockImplementationOnce(() => position.line).mockImplementationOnce(() => position.column))

    let output = jest.fn().mockImplementationOnce(message => message)

    new TicTacToe(input, output).start()

    expect(output.mock.calls.length).toBe(messages.length)

    messages.forEach(message => expect(output.mock.calls.some(ticTacToe => ticTacToe.includes(message))).toBe(true))

}

describe("invalid move", () => {

    test("typing letters", () => playWithPositions([{ line: 1, column: "x" },
                                                    { line: 1, column: 1 },
                                                    { line: 3, column: 3 },
                                                    { line: 2, column: 1 },
                                                    { line: 2, column: 2 },
                                                    { line: 3, column: 1 }], ["Invalid position, try again!", "Player X won!!!"]))

    test("typing other characters", () => playWithPositions([{ line: 1, column: "$" },
                                                             { line: 1, column: 1 },
                                                             { line: 3, column: 3 },
                                                             { line: 2, column: 1 },
                                                             { line: 2, column: 2 },
                                                             { line: 3, column: 1 }], ["Invalid position, try again!", "Player X won!!!"]))

})

test("no winner", () => playWithPositions([{ line: 1, column: 1 },
                                           { line: 2, column: 2 },
                                           { line: 2, column: 1 },
                                           { line: 3, column: 1 },
                                           { line: 1, column: 3 },
                                           { line: 1, column: 2 },
                                           { line: 3, column: 2 },
                                           { line: 2, column: 3 },
                                           { line: 3, column: 3 }], ["There was no winner."]))

describe("win column", () => {

    test("Player O won!!!", () => playWithPositions([{ line: 3, column: 3 },
                                                     { line: 1, column: 1 },
                                                     { line: 2, column: 2 },
                                                     { line: 2, column: 1 },
                                                     { line: 1, column: 3 },
                                                     { line: 3, column: 1 }], ["Player O won!!!"]))

    test("Player X won!!!", () => playWithPositions([{ line: 1, column: 1 },
                                                     { line: 3, column: 3 },
                                                     { line: 2, column: 1 },
                                                     { line: 2, column: 2 },
                                                     { line: 3, column: 1 }], ["Player X won!!!"]))

})

describe("win diagonal", () => {

    test("Player O won!!!", () => playWithPositions([{ line: 1, column: 2 },
                                                     { line: 1, column: 1 },
                                                     { line: 1, column: 3 },
                                                     { line: 2, column: 2 },
                                                     { line: 3, column: 2 },
                                                     { line: 3, column: 3 }], ["Player O won!!!"]))

    test("Player X won!!!", () => playWithPositions([{ line: 1, column: 1 },
                                                     { line: 1, column: 2 },
                                                     { line: 2, column: 2 },
                                                     { line: 1, column: 3 },
                                                     { line: 3, column: 3 }], ["Player X won!!!"]))

})

describe("win line", () => {

    test("Player O won!!!", () => playWithPositions([{ line: 2, column: 2 },
                                                     { line: 1, column: 1 },
                                                     { line: 3, column: 3 },
                                                     { line: 1, column: 2 },
                                                     { line: 3, column: 2 },
                                                     { line: 1, column: 3 }], ["Player O won!!!"]))

    test("Player X won!!!", () => playWithPositions([{ line: 1, column: 1 },
                                                     { line: 2, column: 2 },
                                                     { line: 1, column: 2 },
                                                     { line: 3, column: 3 },
                                                     { line: 1, column: 3 }], ["Player X won!!!"]))

})