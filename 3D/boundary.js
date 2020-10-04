class Boundary {
    constructor(x1, y1, x2, y2, colour) {
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);

        this.colour = colour;
    }

    show() {
        stroke(this.colour.r, this.colour.g, this.colour.b);
        
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
}