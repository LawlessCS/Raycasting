let walls;
let particle;

let newBoundary;

function setup() {
    createCanvas(1000, 800);

    walls = createBoundaries();
    particle = new Particle(100, 200);
}

function draw() {
    background(0);

    particle.moveTo(mouseX, mouseY);
    particle.rayIntersect(walls);

    for (let wall of walls) {
        wall.show();
    }

    particle.show();
}

function getCanvasSize() {
    return createVector(width, height);
}

function mousePressed() {
    newBoundary = createVector(mouseX, mouseY);
}

function mouseReleased() {
    if(mouseX != newBoundary.x && mouseY != newBoundary.y) {
        console.log("if");
        walls.push(new Boundary(newBoundary.x, newBoundary.y, mouseX, mouseY));
    }
}

function keyPressed() {
    if (key == 'b') {
        if (walls.length > 4) {
            let boundaryString = "";
        
            for (let i = 4; i < walls.length; ++i) {
                boundaryString += "walls.push(new Boundary(" + walls[i].a.x + ", " + walls[i].a.y + ", " + walls[i].b.x + ", " + walls[i].b.y + "));\n";
            }

            console.log(boundaryString);
        } else {
            console.log("No walls to save");
        }
    }
}