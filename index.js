import Game from "./game.js"

const tempGame = new Game();
/*(async () => {
    console.log("here")
    await tempGame.readEvent(["this is a test", "this is also a test", "this is a third test"]);
    console.log("after")
})()*/
//console.log(tempGame.activeEvents)
tempGame.resolveEvents()
console.log(tempGame.flags)

