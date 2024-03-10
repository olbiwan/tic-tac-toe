const prompt = require("prompt-sync")()

/**
 * @param input reading of positions
 * @param output displayed messages
 */
new (require("./TicTacToeTypeScript.ts"))(message => prompt(message), message => console.log(message)).start();