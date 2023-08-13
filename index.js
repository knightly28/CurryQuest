//import Game from "https://github.com/knightly28/CurryQuest/blob/main/game.js"

const tempGame = new Game();
(async () => {
    console.log("press the 'a' key")
    await tempGame.awaitKeyPress();
    console.log("you pressed the 'a' key");
})()