import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Virus } from './virus.js';
import { Medical } from './medical.js';


export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        console.log("start de game!");

        for (let i = 0; i < 50; i++) {
            const virus = new Virus();
            this.add(virus);
            // const badVirus = new Actor();
            // badVirus.graphics.use(Resources.BadVirus.toSprite());
            // badVirus.pos = new Vector(500, 300);
            // badVirus.vel = new Vector(-100,0);
            // badVirus.events.on("exitviewport", (e) => this.badVirusLeft(e));
            // this.add(badVirus);
        }
        const medical = new Medical();
        this.add(medical);
    }

    badVirusLeft(e) {
        e.target.pos = new Vector(1350, 300);
    }
}

new Game()
