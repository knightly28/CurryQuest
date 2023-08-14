import Game from "./game.js"

const tempGame = new Game();
/*(async () => {
    console.log("press the 'a' key")
    await tempGame.awaitKeyPress(" ");
    console.log("you pressed the 'a' key");
})()*/

tempGame.readEvent(["this is a test", "this is also a test", "this is a third test"])