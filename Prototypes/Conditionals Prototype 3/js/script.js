/**
 * Traffic light with a click-to-advance cycle
 * Felipe Paiva
 * 
 * Three circles are stacked vertically, like a traffic light. The "state" of the traffic light is kept. The active light is brighter while the others are dimmed. Each mouse click moves to the next state
 */

"use strict";

/**
 * Setup function
*/
let trafficLight;
let currentLight;

function setup() {
    createCanvas(500, 500);
    background('Black');

    currentLight = "red";
    let center = width / 2;

    trafficLight = {
        red: {
            active: "RGB(255, 0, 0)",
            inactive: "RGB(74, 0, 0)",
            size: 100,
            positionX: center,
            positionY: 100,
            status: "active",
        },
        yellow: {
            active: "RGB(255, 255, 0)",
            inactive: "RGB(74, 74, 0)",
            size: 100,
            positionX: center,
            positionY: height / 2,
            status: "inactive",
        },
        green: {
            active: "RGB(0, 255, 0)",
            inactive: "RGB(0, 74, 0)",
            size: 100,
            positionX: center,
            positionY: 410,
            status: "inactive",
        },
    }
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
    fill('darkgrey');
    rect(width/2, height/2, 200, height-50)
}

function drawLights() {
    noStroke();
    // red
    if (trafficLight.red.status === 'active') { 
        fill(trafficLight.red.active);
    } else {
        fill(trafficLight.red.inactive);
    }
    circle(trafficLight.red.positionX, trafficLight.red.positionY, trafficLight.red.size);
    // yellow
    if (trafficLight.yellow.status === 'active') {
        fill(trafficLight.yellow.active);
    } else {
        fill(trafficLight.yellow.inactive);
    }
    circle(trafficLight.yellow.positionX, trafficLight.yellow.positionY, trafficLight.yellow.size);
    // green
    if (trafficLight.green.status === 'active') {
        fill(trafficLight.green.active);
    } else {
        fill(trafficLight.green.inactive);
    }
    circle(trafficLight.green.positionX, trafficLight.green.positionY, trafficLight.green.size);
}

function draw() {
    drawTrafficLight();
    drawLights();
}