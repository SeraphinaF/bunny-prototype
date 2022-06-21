import * as PIXI from "pixi.js"
import bunnyImage from "./images/bunny.png"
import backgroundImage from "./images/grass-background.jpg"
import { Bunny } from "./bunny"

class bunnyGame {

    public pixi: PIXI.Application
    public loader: PIXI.Loader
    public background = backgroundImage
    public bunnys : Bunny [] = []

    constructor() {
        this.pixi = new PIXI.Application({
            width: innerWidth, height: innerHeight})
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader
            .add("backgroundTexture", backgroundImage)
            .add("bunnyTexture", bunnyImage)
        this.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        console.log("all textures loaded!")
        this.background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!)
        this.background.width = window.innerWidth;
        this.background.height = window.innerHeight;
        this.pixi.stage.addChild(this.background)

        // for (let i = 0; i < 25; i++) {
        //     let lonelyFish = new Fish(this.loader.resources["fishTexture"].texture!)
        //     this.pixi.stage.addChild(lonelyFish)
        //     this.fishes.push(lonelyFish)

        //     let manyBubbles = new Bubble(this.loader.resources["bubbleTexture"].texture!)
        //     this.pixi.stage.addChild(manyBubbles)
        //     this.bubbles.push(manyBubbles)

        // }
        for(let i = 0; i < 1; i++){
            let bunny = new Bunny(this.loader.resources["bunnyTexture"].texture!)
            this.pixi.stage.addChild(bunny)
            this.bunnys.push(bunny)
        }


        this.pixi.ticker.add((delta) => this.updateTheStage(delta))
    }

    updateTheStage(delta: number) {

        // for (let myfish of this.fishes) {
        //     myfish.swim()
        // }

        for (let myBunny of this.bunnys){
            myBunny.update();
        }

    }
}

new bunnyGame()