class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.rays = [];
        this.fov = 90;

        for (let a = 0; a < this.fov * 2; ++a) {
            this.rays.push(new Ray(this.pos.x, this.pos.y, (this.fov / 2 - a) / 2));
        }
    }

    show() {
        for (let ray of this.rays) {
            ray.show();
        }
    }

    moveTo(x, y) {
        this.pos.x = x;
        this.pos.y = y;

        for (let ray of this.rays) {
            ray.moveTo(x, y);
        }
    }

    move(dir) {
        let movementOffset = 90 * dir;
        let facing = (this.rays[0].getDir() + 45 + movementOffset) * Math.PI / 180;


        // Multiply by move speed
        this.pos.x += Math.cos(facing) * 1;
        this.pos.y += -Math.sin(facing) * 1;
        
        for (let i = 0; i < this.rays.length; ++i) {
            this.rays[i].moveTo(this.pos.x, this.pos.y);
        }
    }

    rotate(dir) {
        // -1 for clockwise
        // 1 for anticlockwise
        // multiplied by rotation speed        
        for (let i = 0; i < this.rays.length; ++i) {
            this.rays[i].setDir(this.rays[i].getDir() + dir * 3);
        }
    }

    rayIntersect(walls) {
        for (let ray of this.rays) {
            let intersections = [];

            for (let wall of walls) {
                let intersect = ray.checkIntersect(wall);

                if (intersect) {
                    intersections.push({point: intersect, colour: wall.colour});
                }
            }

            if (intersections.length > 0) {
                let closest = Infinity;
                let closestIndex = -1;

                for (let i = 0; i < intersections.length; ++i) {
                    let dist = Math.abs(Math.pow(intersections[i].point.x - ray.pos.x, 2) + Math.pow(intersections[i].point.y - ray.pos.y, 2))
                    if (dist < closest) {
                        closest = dist;
                        closestIndex = i;
                    }
                }

                ray.trim(intersections[closestIndex].point);
                ray.colour = intersections[closestIndex].colour;
            }
        }
    }
}