import Game from "./game.js"
import Screen from "./screen.js"

const tempGame = new Game();
const tempScreen = new Screen();
/*(async () => {
    console.log("before")
    await tempGame.awaitInterval(1000);
    console.log("after")
})()*/
//console.log(tempGame.activeEvents)
tempGame.resolveEvents()
//console.log(tempGame.flags)

