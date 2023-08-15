import Camera from "./camera.js"

export default class Screen {
    constructor () {
        this.hiddenground = document.createElement("canvas");
        this.background = document.querySelector("#background");
        this.midground = document.querySelector("#midground");
        this.foreground = document.querySelector("#foreground");
        this.hdnctx = this.hiddenground.getContext("2d");
        this.bgctx = this.background.getContext("2d");
        this.mgctx = this.midground.getContext("2d");
        this.fgctx = this.foreground.getContext("2d");

        //image location is temporary
        let img = new Image();
        img.onload = () => {
            this.hdnctx.drawImage(img, 0, 0);
            //this.bgctx.drawImage(this.hiddenground, 50, 50, 50, 50, 0, 0, this.background.clientWidth, this.background.clientHeight);
        };
        img.src = "./test_background.svg";

        this.camHeight = 50;
        this.camWidth = 50;
        this.camX = 0;
        this.camY = 0;
        this.camDT = 10;
        //cam follow will eventually be set to an object and follow its x and y
        this.camFollow;
        this.enableCamFollow = true;
    }

    pan (panTo, dt = this.camDT) {
        this.enableCamFollow = false;
        let intvl = setInterval(() => {
            
        }, 10);
    }

    shake () {

    }

    zoom () {

    }
}