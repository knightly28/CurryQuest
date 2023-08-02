

export default class Game {
    constructor () {
        this.events = []
        this.availEvnts = []
        this.bypassKeys = ["p", "m"]
    }

    addEvent (priority, flag) {
        this.events.splice(this.events.findIndex(v => v.priority > priority), 0, {priority: priority, flag: flag});
    }

    resolveEvents () {
        for (let e of this.events) {

        }
    }

    awaitKeyPress (only = []) {
        let temp = this.bypassKeys;
        return new Promise((resolve) => {
            document.addEventListener('keydown', (e) => {
                if (only.includes(e.key) || !(only.length || temp.includes(e.key))) {
                    resolve();
                }
            });
        });
    } 
}

/*const tempGame = new Game();
(async () => {
    await tempGame.awaitKeyPress([], true);
    console.log("made it here");
})()

console.log("hello")*/
