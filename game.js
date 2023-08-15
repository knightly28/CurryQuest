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
        (async () => {
            for (let events of this.activeEvents) {
                for (let event of events) {
                    let [key, value] = event;
                    if (key === "await") {
                        await this.awaitInterval(value)
                    } else if (key !== "event") {
                        await this[`${key}Event`](value);
                    }
                    console.log(this.flags)
                }
            }
        })();
    }

    flagsEvent (flags) {
        return new Promise((resolve) => {
            for (let flag of flags) {
                if (flag[1] === "&") {
                    this.flags &= ~(2 ** flag[0])
                } else if (flag[1] === "|") {
                    this.flags |= (2 ** flag[0])
                } else if (flag[1] === "^") {
                    this.flags ^= (2 ** flag[0])
                }
            }
            resolve()
        });
    }

    readEvent (lines) {
        return new Promise((resolve) => {
            (async () => {
                for await (let line of lines) {
                    //put text on a banner
                    console.log(line)
                    await this.awaitKeyPress(" ")
                }
                resolve()
            })()
        });
    }

    shakeEvent () {

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

    awaitInterval (time) {
        return new Promise((resolve) => {
            let temp = setTimeout(() => {
                resolve()
            }, time);
        });
    }
}
