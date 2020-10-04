class Ray {
    constructor(x, y, d) {
        this.pos = createVector(x, y);
        this.dir = d;
        this.endPoint = this.calculateEndPoint();
        this.collides = false;

        this.colour = {r: 255, g: 255, b: 255};
    }
    
    show() {
        stroke(this.colour.r, this.colour.g, this.colour.b);

        line(this.pos.x, this.pos.y, this.endPoint.x, this.endPoint.y);
    }

    moveTo(x, y) {
        this.pos.x = x;
        this.pos.y = y;

        this.endPoint = this.calculateEndPoint();
    }

    getDir() {
        return this.dir;
    }

    setDir(d) {
        this.dir = d;
    }

    lookAt(x, y) {
        this.setDir(Math.atan2(this.pos.y - y, x - this.pos.x) * 180 / Math.PI);
    }

    calculateEndPoint() {
        // Get canvas size for end point calculations
        const canvasSize = getCanvasSize();
        // Get maximum size of line from pythagorus-ing canvas dimensions
        const maxLength = Math.sqrt(canvasSize.x * canvasSize.x + canvasSize.y * canvasSize.y);

        // Convert ray direction to radians from degrees
        const dirRad = this.dir * Math.PI / 180;

        // Get end point of ray from max length of line for canvas size
        const endPoint = createVector(this.pos.x + Math.cos(dirRad) * maxLength, this.pos.y + -Math.sin(dirRad) * maxLength);
        
        return endPoint;
    }

    getEndPoint() {
        return this.endPoint;
    }

    checkIntersect(wall) {
        const x1 = wall.a.x;
        const y1 = wall.a.y;
        const x2 = wall.b.x;
        const y2 = wall.b.y;

        const x3 = this.pos.x;
        const y3 = this.pos.y;        
        
        let endPoint = this.calculateEndPoint();
        const x4 = endPoint.x;
        const y4 = endPoint.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (den == 0) {
            return null;
        } else {
            const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
            const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

            if (t > 0 && t < 1 && u > 0) {
                let pt = createVector();

                pt.x = x1 + t * (x2 - x1);
                pt.y = y1 + t * (y2 - y1);

                return pt;

            } else {
                return null;
            }
        }
    }

    trim(point) {
        this.endPoint.x = point.x;
        this.endPoint.y = point.y;
    }
}
