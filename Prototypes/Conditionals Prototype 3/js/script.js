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
            size: 30,
            positionX: center,
            positionY: 450,
        },
        yellow: {
            active: "RGB(255, 255, 0)",
            inactive: "RGB(74, 74, 0)",
            size: 30,
            positionX: center,
            positionY: 300,
        },
        green: {
            active: "RGB(0, 255, 0)",
            inactive: "RGB(0, 74, 0)",
            size: 30,
            positionX: center,
            positionY: 150,
        },
    }
}

function mouseClicked() {
    if (currentLight === "red") {
        currentLight = "yellow";
    } else if (currentLight === "yellow") {
        currentLight = "green";
    } else if (currentLight === "green") {
        currentLight = "red";
    }
}
/**
 * 
*/

function drawTrafficLight() {
    rectMode(CENTER);
    fill('darkgrey');
    rect(width/2, height/2, 200, height-50)
}
function draw() {
    drawTrafficLight();
}