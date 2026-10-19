/**
 * The input escape room
 * Felipe Paiva
 * 
 * A puzzle game where each room is locked behind a different type of input, and the player has to discover which one. One door opens with a double-click, another needs a long press (hold for 2 seconds), another a drag-and-drop, another a secret key sequence, another a specific mouse gesture like drawing a circle. The only hints are visual and sound cues you design.
 */

"use strict";

/**
 * Description of Setup
*/
const backgroundColor = "rgb(0, 0, 30)";
const backgroundColor2 = "rgb(1, 27, 50)";
const textColor = "wheat";
let currentLevel = 0;
let animateDoor = false;

let doorOpeningSound;
let doorOpeningSound2;

async function setup() {
    doorOpeningSound = await loadSound('assets/sounds/open-door1.mp3');
    doorOpeningSound2 = await loadSound('assets/sounds/open-door2.mp3');

    const width = window.innerWidth;
    const height = window.innerHeight;
    createCanvas(width, height);
    background(backgroundColor);
    fill('white');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textSize(18);
    text("Welcome to input escape room. Find the right input to unlock the door and go to the next room!", width / 2, height / 2);
    text("Press any key to start the game and enter your first room.", width / 2, height / 2 + 50);
}

function mousePressed() {
    userStartAudio();
    if (currentLevel === 0) {
        currentLevel++;
    }
    background(backgroundColor);
}

function loadLevel1() {
    if (!animateDoor) {
        drawDoor();
        drawHint1();
    } else {
        drawOpenDoor();
    }
}
function loadLevel2() {
    drawDoor();
    drawHint2();

}

function drawDoor() {
    noStroke()
    fill(textColor);
    rect(width / 2, height / 2, 180, 320);

    fill('black');
    circle(width / 2 - 60, height / 2 + 15, 20)
}

function drawOpenDoor() {
    background(backgroundColor);
    noStroke()

    // draws the door frame
    fill(textColor);
    rect(width / 2, height / 2, 180, 320);
    fill(backgroundColor);
    rect(width / 2, height / 2, 160, 300);

    // draws the open door
    fill(textColor);
    beginShape();
    vertex(100, 50);
    vertex(250, 120);
    vertex(250, 350);
    vertex(100, 280);
    endShape(CLOSE);

}

function drawHint1() {
    fill(textColor);
    text("It sounds like an ocean.", width / 2, height / 2 + 250);
}

function drawHint2() {
    fill(textColor);
    text("I become a ladder if you stack me vertically", width / 2, height / 2 + 250);
}
/**
 * Draw description
*/
function keyPressed() {
    if (key === "c" && currentLevel === 1) {
        animateDoor = true;
        doorOpeningSound.play();
        // currentLevel++;
        // background(backgroundColor2);
    }
}
function draw() {
    // different game level management
    if (currentLevel === 1) {
        loadLevel1();
    } else if (currentLevel === 2) {
        loadLevel2();
    }
}