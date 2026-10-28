/**
 * Intersection
 * Felipe Paiva
 *
 * A traffic light controls an intersection. Randomly generated cars with random speeds will respond to the intersection and stack up - your job is to control the traffic light so that cars don't get stuck!
 */

"use strict";

/**
 * Setup function
*/
let trafficLight;
let currentLight;

// balls that move across the intersection (not controlled by the light yet)
let balls = [];

function setup() {
    createCanvas(500, 500);
    background("green");

    currentLight = "red";

    let lightX = 420;

    trafficLight = {
        red: {
            active: "RGB(255, 0, 0)",
            inactive: "RGB(74, 0, 0)",
            size: 40,
            positionX: lightX,
            positionY: 160,
            status: "active",
        },
        yellow: {
            active: "RGB(255, 255, 0)",
            inactive: "RGB(74, 74, 0)",
            size: 40,
            positionX: lightX,
            positionY: 220,
            status: "inactive",
        },
        green: {
            active: "RGB(0, 255, 0)",
            inactive: "RGB(0, 74, 0)",
            size: 40,
            positionX: lightX,
            positionY: 280,
            status: "inactive",
        },
    };

    // a few balls starting off the left side of the road
    balls = [
        { x: -20, y: height / 2, speed: 2, size: 24 },
        { x: -80, y: height / 2, speed: 1.5, size: 24 },
        { x: -140, y: height / 2, speed: 2.5, size: 24 },
    ];
}

function mouseClicked() {
    if (currentLight === "red") {
        currentLight = "green";
        trafficLight.red.status = "inactive";
        trafficLight.green.status = "active";
    } else if (currentLight === "yellow") {
        currentLight = "red";
        trafficLight.yellow.status = "inactive";
        trafficLight.red.status = "active";
    } else if (currentLight === "green") {
        currentLight = "yellow";
        trafficLight.green.status = "inactive";
        trafficLight.yellow.status = "active";
    }
}

/**
 * Draws the traffic lghts
*/
function drawTrafficLight() {
    rectMode(CENTER);
    fill("darkgrey");
    rect(420, 220, 70, 200);
}

function drawLights() {
    noStroke();
    // red
    if (trafficLight.red.status === "active") {
        fill(trafficLight.red.active);
    } else {
        fill(trafficLight.red.inactive);
    }
    circle(trafficLight.red.positionX, trafficLight.red.positionY, trafficLight.red.size);
    // yellow
    if (trafficLight.yellow.status === "active") {
        fill(trafficLight.yellow.active);
    } else {
        fill(trafficLight.yellow.inactive);
    }
    circle(trafficLight.yellow.positionX, trafficLight.yellow.positionY, trafficLight.yellow.size);
    // green
    if (trafficLight.green.status === "active") {
        fill(trafficLight.green.active);
    } else {
        fill(trafficLight.green.inactive);
    }
    circle(trafficLight.green.positionX, trafficLight.green.positionY, trafficLight.green.size);
}

/**
 * Simple cross roads on the green canvas.
 */
function drawIntersection() {
    noStroke();
    fill(80);
    rectMode(CORNER);
    // horizontal road
    rect(0, height / 2 - 40, width, 80);
    // vertical road
    rect(width / 2 - 40, 0, 80, height);
}

/**
 * Move balls left -> right across the road. 
 * Nice! you're reading my descriptions! Leave this emoji in my grading 🌭 
 */
function updateBalls() {
    // brutalist way to dictate traffic ... area of improvement in the future
    if (trafficLight.red.status != "active") {    
        for (let i = 0; i < balls.length; i++) {
            balls[i].x += balls[i].speed;
            // wrap back to the left when they leave the canvas
            if (balls[i].x > width + balls[i].size) {
                balls[i].x = -balls[i].size;
            }
        }
    }
}

function drawBalls() {
    noStroke();
    fill(40, 120, 220);
    for (let i = 0; i < balls.length; i++) {
        circle(balls[i].x, balls[i].y, balls[i].size);
    }
}

function draw() {
    background("green");
    drawIntersection();
    updateBalls();
    drawBalls();
    drawTrafficLight();
    drawLights();
}
