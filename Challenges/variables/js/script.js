/**
 * Variables - Mr. Red
 * by Pippin Bar
 * Make Mr. Furious Furious
 * 
 * Felipe A. Castelo Branco and Felipe S. Paiva
 * 
 */

"use strict";

// ▽ Our friend Mr. Furious
let mrFurious = {

    // ▽ Position and size
    x: 540,
    y: 540,
    size: 540,

    // ▽ Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }

};

let bird = {
    x: 100,
    y: 100,
    w: 100,
    h: 50,
    fill: 'white',
    speed: 10,

}


function setup() {

    // ▽ Create the canvas
    createCanvas(1080, 1080);

    // ▽ speed in which circle turns red, in fps
    frameRate(60);

}


// ▽ Draw (and update) Mr. Furious
function drawMrFurious() {

    // ▽ acceleration of Mr. Furious shaking
    let rage = 0 + frameCount / 12;

    // ▽ area position of Mr. Furious shaking
    let shakeX = constrain(mrFurious.x + random(-rage, rage), 525, 575)

    // ▽ MrFurious Shirt
    fill(100, 200, 200)
    noStroke()
    ellipse(shakeX, 1000, 1000, 600)

    // ▽ Draw Mr. Furious as a coloured circle
    push();
    noStroke();

    // ▽ Skin tone changes with passing FrameCounts
    fill(mrFurious.fill.r, constrain(mrFurious.fill.g - frameCount, 150, 225), constrain(mrFurious.fill.b - frameCount, 150, 255));


    // ▽ Mr. Furious neck area
    ellipse(shakeX, mrFurious.y, mrFurious.size);
    ellipse(shakeX, mrFurious.y + 300, mrFurious.size + 200, mrFurious.size / 2)

    pop();

    // ▽ Mr. Furious eyes
    fill('white')
    ellipse(shakeX - 100, mrFurious.y, 50, 25);
    ellipse(shakeX + 100, mrFurious.y, 50, 25);

    // ▽ Mr. Furious pupils 
    fill(`black`)
    circle(shakeX - 100, mrFurious.y, 15, 15)
    circle(shakeX + 100, mrFurious.y, 15, 15)


    // Draws the right eyebrow
    push()
    rectMode(CENTER)

    // Changes origin point to be able to rotate
    translate(shakeX + 100, mrFurious.y - 25)

    //Sets the rotate unit and rotate the origin point -25°
    angleMode(DEGREES)
    rotate(-25)

    // Creates eyebrows
    rect(0, 0, 115, 25)

    pop()

    // Draws the left eyebrow
    push()
    rectMode(CENTER)

    // Changes origin point to be able to rotate    
    translate(shakeX - 100, mrFurious.y - 25)

    //Sets the rotate unit and rotate the origin point -25°
    angleMode(DEGREES)
    rotate(25)

    // Creates eyebrows
    rect(0, 0, 115, 25)

    pop()
}

// draws a little annoying bird
function drawBird() {
    fill(bird.fill);
    bird.x += bird.speed;
    ellipse(bird.x, bird.y, bird.w, bird.h);

    if (bird.x >= 800 || bird.x < 200) {
        bird.speed = -bird.speed;
    }
}

// draws the illustration
function draw() {

    // ▽ Background color turns dark with frame count
    background(constrain(160 - frameCount / 2, 45, 225), constrain(180 - frameCount / 2, 45, 225), constrain(200 - frameCount / 2, 45, 225))

    drawMrFurious()
    drawBird()
}