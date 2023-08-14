import gameEvents from "./gameEvents.json" assert {type: 'json'};

export default class Game {
    constructor () {
        this.flags = 0
        this.allEvents = gameEvents
        this.activeEvents = []
        this.bypassKeys = ["p", "m"]
    }

    /*addEvent (priority, flag) {
        this.events.splice(this.events.findIndex(v => v.priority > priority), 0, {priority: priority, flag: flag});
    }*/

    resolveEvents () {
        for (let e of this.activeEvents) {
            
        }
    }

    flagEvent (flags) {
        for (let flag of flags) {
            if (flag[1] === "&") {
                this.flags &= ~(2 ** flag[0])
            } else if (flag[1] === "|") {
                this.flags |= (2 ** flag[0])
            } else if (flag[1] === "^") {
                this.flags ^= (2 ** flag[0])
            }
        }
    }

    readEvent (lines) {
        return new Promise((resolve) => {
            (async () => {
                for await (let line of lines) {
                    //put text on a banner
                    console.log(line)
                    await this.awaitKeyPress(" ")
                }
            })()
            resolve()
        });
    }

    awaitKeyPress (...only) {
        return new Promise((resolve) => {
            document.addEventListener('keydown', (e) => {
                if (only.includes(e.key) || !(only.length || this.bypassKeys.includes(e.key))) {
                    resolve();
                }
            });
        });
    } 
}
