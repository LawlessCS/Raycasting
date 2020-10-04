function createBoundaries() {
    let walls = [];

    // Top
    walls.push(new Boundary(25, 25, width - 25, 25, {r: 100, g: 100, b: 100}));
    // Left
    walls.push(new Boundary(25, 25, 25, height - 25, {r: 100, g: 100, b: 100}));
    // Bottom
    walls.push(new Boundary(25, height - 25, width - 25, height - 25, {r: 100, g: 100, b: 100}));
    // Right
    walls.push(new Boundary(width - 25, height - 25, width - 25, 25, {r: 100, g: 100, b: 100}));

    // Auto Generated
    //Square
    walls.push(new Boundary(140, 100, 140, 347, {r: 255, g: 150, b: 150}));
    walls.push(new Boundary(140, 347, 377, 347, {r: 255, g: 150, b: 150}));
    walls.push(new Boundary(377, 200, 377, 100, {r: 255, g: 150, b: 150}));
    walls.push(new Boundary(377, 347, 377, 300, {r: 255, g: 150, b: 150}));
    walls.push(new Boundary(377, 100, 140, 100, {r: 255, g: 150, b: 150}));

    // Triangle
    walls.push(new Boundary(573, 501, 718, 302, {r: 150, g: 255, b: 150}));
    walls.push(new Boundary(718, 302, 785, 574, {r: 150, g: 255, b: 150}));
    walls.push(new Boundary(785, 574, 526, 561, {r: 150, g: 255, b: 150}));
    walls.push(new Boundary(526, 561, 532, 499, {r: 150, g: 255, b: 150}));

    // // Circle Thing
    walls.push(new Boundary(188, 542, 153, 569, {r: 150, g: 150, b: 255}));
    walls.push(new Boundary(153, 569, 143, 626, {r: 150, g: 150, b: 255}));
    walls.push(new Boundary(143, 626, 176, 680, {r: 150, g: 150, b: 255}));
    walls.push(new Boundary(176, 680, 243, 697, {r: 150, g: 150, b: 255}));
    walls.push(new Boundary(243, 697, 325, 688, {r: 150, g: 150, b: 255}));
    walls.push(new Boundary(325, 688, 370, 640, {r: 150, g: 150, b: 255}));
    walls.push(new Boundary(370, 640, 379, 594, {r: 150, g: 150, b: 255}));
    walls.push(new Boundary(255, 533, 288, 539, {r: 150, g: 150, b: 255}));
    walls.push(new Boundary(288, 539, 327, 550, {r: 150, g: 150, b: 255}));
    walls.push(new Boundary(327, 550, 355, 572, {r: 150, g: 150, b: 255}));

    // Weird Lines
    walls.push(new Boundary(688, 111, 722, 144, {r: 150, g: 150, b: 255}));
    walls.push(new Boundary(761, 179, 822, 235, {r: 150, g: 150, b: 255}));
    walls.push(new Boundary(728,  38, 875, 137, {r: 150, g: 150, b: 255}));

    // Thick Wall
    walls.push(new Boundary(463, 290, 463, 440, {r: 150, g: 255, b: 150}));
    walls.push(new Boundary(470, 290, 470, 440, {r: 150, g: 255, b: 150}));
    walls.push(new Boundary(470, 440, 463, 440, {r: 150, g: 255, b: 150}));
    walls.push(new Boundary(470, 290, 463, 290, {r: 150, g: 255, b: 150}));

    return walls;
}