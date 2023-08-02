import Game from "./game.js"

const tempGame = new Game();
(async () => {
    console.log("press the 'a' key")
    await tempGame.awaitKeyPress();
    console.log("you pressed the 'a' key");
})()