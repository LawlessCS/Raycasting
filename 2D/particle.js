class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.rays = [];

        for (let a = 0; a < 720; a += 2) {
            this.rays.push(new Ray(this.pos.x, this.pos.y, a));
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

    rayIntersect(walls) {
        for (let ray of this.rays) {
            let intersections = [];

            for (let wall of walls) {
                let intersect = ray.checkIntersect(wall);

                if (intersect) {
                    intersections.push(intersect);
                }
            }

            if (intersections.length > 0) {
                let closest = Infinity;
                let closestIndex = -1;

                for (let i = 0; i < intersections.length; ++i) {
                    let dist = Math.abs(Math.pow(intersections[i].x - ray.pos.x, 2) + Math.pow(intersections[i].y - ray.pos.y, 2))
                    if (dist < closest) {
                        closest = dist;
                        closestIndex = i;
                    }
                }

                ray.trim(intersections[closestIndex]);
            }
        }
    }
}