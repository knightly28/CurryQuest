import Camera from "./camera.js"

export default class Screen {
    constructor () {
        this.background = document.createElement("canvas");
        this.midground = document.querySelector("#midground");
        this.foreground = document.querySelector("#foreground");
        this.bgctx = this.background.getContext("2d");
        this.mgctx = this.midground.getContext("2d");
        this.fgctx = this.foreground.getContext("2d");

        
        //image location is temporary
        let img = new Image();
        img.onload = () => {
            this.bgctx.drawImage(img, 0, 0);
            this.mgctx.drawImage(this.background, 50, 50, 50, 50, 0, 0, this.midground.clientWidth, this.midground.clientHeight);
        };
        img.src = "./test_background.svg";
    }
}