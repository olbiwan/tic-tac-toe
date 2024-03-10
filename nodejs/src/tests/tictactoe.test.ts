const TicTacToe = require("../TicTacToe.ts")

mockPlays = (plays) => {
    let input = jest.fn();
    plays.forEach((position) => input.mockImplementationOnce(() => position.line).mockImplementationOnce(() => position.column))
    return input
}

describe("invalid move", () => {

    test("typing letters", () => {

        const output = jest.fn().mockImplementationOnce(message => message)

         new TicTacToe(mockPlays([{ line: 1, column: "x" },
                                  { line: 1, column: 1 },
                                  { line: 3, column: 3 },
                                  { line: 2, column: 1 },
                                  { line: 2, column: 2 },
                                  { line: 3, column: 1 }]), output).start()

        expect(output.mock.calls.length).toBe(2)
        expect(output.mock.calls.some(message => message.includes("Invalid position, try again!"))).toBe(true)
        expect(output.mock.calls.some(message => message.includes("Player X won!!!"))).toBe(true)

    })

    test("typing other characters", () => {

        const output = jest.fn().mockImplementationOnce(message => message)

        new TicTacToe(mockPlays([{ line: 1, column: "$" },
                                 { line: 1, column: 1 },
                                 { line: 3, column: 3 },
                                 { line: 2, column: 1 },
                                 { line: 2, column: 2 },
                                 { line: 3, column: 1 }]), output).start()

        expect(output.mock.calls.length).toBe(2)
        expect(output.mock.calls.some(message => message.includes("Invalid position, try again!"))).toBe(true)
        expect(output.mock.calls.some(message => message.includes("Player X won!!!"))).toBe(true)

    })

})

test("no winner", () => {

    const output = jest.fn().mockImplementationOnce(message => message)

    new TicTacToe(mockPlays([{ line: 1, column: 1 },
                             { line: 2, column: 2 },
                             { line: 2, column: 1 },
                             { line: 3, column: 1 },
                             { line: 1, column: 3 },
                             { line: 1, column: 2 },
                             { line: 3, column: 2 },
                             { line: 2, column: 3 },
                             { line: 3, column: 3 }]), output).start()

    expect(output.mock.calls.length).toBe(1)
    expect(output.mock.calls.some(message => message.includes("There was no winner."))).toBe(true)

})

describe("win column", () => {

    test("Player O won!!!", () => {

        const output = jest.fn().mockImplementationOnce(message => message)

        new TicTacToe(mockPlays([{ line: 3, column: 3 },
                                 { line: 1, column: 1 },
                                 { line: 2, column: 2 },
                                 { line: 2, column: 1 },
                                 { line: 1, column: 3 },
                                 { line: 3, column: 1 }]), output).start()

        expect(output.mock.calls.length).toBe(1)
        expect(output.mock.calls.some(message => message.includes("Player O won!!!"))).toBe(true)

    })

    test("Player X won!!!", () => {

        const output = jest.fn().mockImplementationOnce(message => message)

        new TicTacToe(mockPlays([{ line: 1, column: 1 },
                                 { line: 3, column: 3 },
                                 { line: 2, column: 1 },
                                 { line: 2, column: 2 },
                                 { line: 3, column: 1 }]), output).start()

        expect(output.mock.calls.length).toBe(1)
        expect(output.mock.calls.some(message => message.includes("Player X won!!!"))).toBe(true)

    })

});

describe("win diagonal", () => {

    test("Player O won!!!", () => {

        const output = jest.fn().mockImplementationOnce(message => message)

        new TicTacToe(mockPlays([{ line: 1, column: 2 },
                                 { line: 1, column: 1 },
                                 { line: 1, column: 3 },
                                 { line: 2, column: 2 },
                                 { line: 3, column: 2 },
                                 { line: 3, column: 3 }]), output).start()

        expect(output.mock.calls.length).toBe(1)
        expect(output.mock.calls.some(message => message.includes("Player O won!!!"))).toBe(true)

    })

    test("Player X won!!!", () => {

        const output = jest.fn().mockImplementationOnce(message => message)

        new TicTacToe(mockPlays([{ line: 1, column: 1 },
                                 { line: 1, column: 2 },
                                 { line: 2, column: 2 },
                                 { line: 1, column: 3 },
                                 { line: 3, column: 3 }]), output).start()

        expect(output.mock.calls.length).toBe(1)
        expect(output.mock.calls.some(message => message.includes("Player X won!!!"))).toBe(true)

    })

})

describe("win line", () => {

    test("Player O won!!!", () => {

        const output = jest.fn().mockImplementationOnce(message => message)

        new TicTacToe(mockPlays([{ line: 2, column: 2 },
                                 { line: 1, column: 1 },
                                 { line: 3, column: 3 },
                                 { line: 1, column: 2 },
                                 { line: 3, column: 2 },
                                 { line: 1, column: 3 }]), output).start()

        expect(output.mock.calls.length).toBe(1)
        expect(output.mock.calls.some(message => message.includes("Player O won!!!"))).toBe(true)

    })

    test("Player X won!!!", () => {

        const output = jest.fn().mockImplementationOnce(message => message)

        new TicTacToe(mockPlays([{ line: 1, column: 1 },
                                 { line: 2, column: 2 },
                                 { line: 1, column: 2 },
                                 { line: 3, column: 3 },
                                 { line: 1, column: 3 }]), output).start()

        expect(output.mock.calls.length).toBe(1)
        expect(output.mock.calls.some(message => message.includes("Player X won!!!"))).toBe(true)

    })

})