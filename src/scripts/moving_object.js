
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class MovingObject {
    constructor(options = {}) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.stroke();
    }

    move(timeDelta) {
       
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;


        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
        this.vel = this.game.wrap(this.pos, this.vel);

    }
}

export default MovingObject;