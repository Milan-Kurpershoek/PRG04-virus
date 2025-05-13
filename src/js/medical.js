import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Medical extends Actor {
    onInitialize() {
        this.graphics.use(Resources.MedicalVirus.toSprite())
        this.pos = new Vector(400, 400);
        this.vel = new Vector(0, 0);
    }
}