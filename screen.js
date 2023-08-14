import Camera from "./camera.js"

export default class Screen {
    constructor () {
        this.background = document.createElement("canvas");
        this.midground = document.querySelector("#main");
        this.foreground = document.createElement("canvas");
        this.bgctx = this.background.getContext("2d");
        this.mgctx = this.midground.getContext("2d");
        this.fgctx = this.foreground.getContext("2d");

        this.mgctx.beginPath()
        this.mgctx.moveTo(0, 0)
        this.mgctx.lineTo(100, 100)
        this.mgctx.stroke()
        //image location is temporary
        let img = new Image();
        img.onload = function () {
            this.mgctx.drawImage(img, 0, 0);
        };
        img.src = "./test_background.svg"
    }
}