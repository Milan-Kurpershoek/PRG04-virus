import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Virus extends Actor {
    constructor() {
        super({
            width: Resources.BadVirus.width,
            height: Resources.BadVirus.height

        });
    }
    onInitialize(engine) {
        this.graphics.use(Resources.BadVirus.toSprite());
        this.on("pointerdown", (event) => this.remove(event))
        this.pos = new Vector(
            Math.random() * engine.drawWidth,
            Math.random() * engine.drawHeight
        );
    }

    remove(event) {
        this.kill();
    }
}
