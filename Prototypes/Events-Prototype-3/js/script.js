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
const backgroundColor = [
    "rgb(0, 0, 30)",  // starting screen 
    "rgb(4, 55, 68)",  // lvl 1
    "rgb(1, 27, 50)", // lvl 2
    "rgb(23, 55, 78)",  // lvl 3
    "rgb(28, 68, 51)",  // lvl 4
    "rgb(87, 52, 95)",  // lvl 5
];
const textColor = "wheat";
let currentLevel = 0;
let animateDoor = false;
let lives;
let livesText;
let doorOpeningSound;
let doorOpeningSound2;

async function setup() {
    doorOpeningSound = await loadSound('assets/sounds/open-door1.mp3');
    doorOpeningSound2 = await loadSound('assets/sounds/open-door2.mp3');
    lives = 10;
    updateLivesText();
    const width = window.innerWidth;
    const height = window.innerHeight;
    createCanvas(width, height);
    background(backgroundColor[0]);
    fill('white');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textSize(18);
    text("Welcome to input escape room. Find the right input to unlock the door and go to the next room!", width / 2, height / 2);
    text("Press any key to start the game and enter your first room.", width / 2, height / 2 + 50);
}

function updateLivesText() {
    livesText = "";
    for (let i = 0; i < lives; i++) {
        livesText += " 🩶";
    }
}
function mousePressed() {
    userStartAudio();
    if (currentLevel === 0) {
        background(backgroundColor[0]);
        currentLevel++;
    }
}

function loadLevel1() {
    if (!animateDoor) {
        drawDoor();
        drawHint1();
    } else {
        drawOpenDoor();
    }
    drawLivesText();
}
function loadLevel2() {
    if (!animateDoor) {
        drawDoor();
        drawHint2();
    } else {
        drawOpenDoor();
    }
    drawLivesText();
}

function loadLevel3() {
    if (!animateDoor) {
        drawDoor();
        drawHint3();
    } else {
        drawOpenDoor();
    }
    drawLivesText();
}

function loadLevel4() {
    if (!animateDoor) {
        drawDoor();
        drawHint4();
    } else {
        drawOpenDoor();
    }
    drawLivesText();
}

function loadLevel5() {
    if (!animateDoor) {
        drawDoor();
        drawHint5();
    } else {
        drawOpenDoor();
    }
    drawLivesText();
}

function drawDoor() {
    noStroke()
    fill(textColor);
    rect(width / 2, height / 2, 180, 320);

    fill('black');
    circle(width / 2 - 60, height / 2 + 15, 20)
}

function drawOpenDoor() {
    background(backgroundColor[currentLevel]);
    noStroke()

    // draws the door frame
    fill(textColor);
    rect(width / 2, height / 2, 180, 320);
    // Will show the color of the next room
    fill(backgroundColor[currentLevel+1]);
    rect(width / 2, height / 2, 160, 300);

    // draws the open door
    fill(textColor);
    beginShape();
    vertex(width / 2 + 90, height / 2 - 160);
    vertex(width / 2 + 190, height / 2 - 110);
    vertex(width / 2 + 190, height / 2 + 220);
    vertex(width / 2 + 90, height / 2 + 160);
    endShape(CLOSE);

}

function drawHint1() {
    fill(textColor);
    text("It sounds like an ocean.", width / 2, height / 2 + 250);
}

function drawHint2() {
    fill(textColor);
    text("I become a ladder if you stack me vertically.", width / 2, height / 2 + 250);
}

function drawHint3() {
    fill(textColor);
    text("Nothing.", width / 2, height / 2 + 250);
}

function drawHint4() {
    fill(textColor);
    text("You must find balance.", width / 2, height / 2 + 250);
}

function drawHint5() {
    fill(textColor);
    text("Without me, a bracket can never close. ", width / 2, height / 2 + 250);
}

function drawLivesText() {
    fill(textColor);
    text(livesText, width / 2, height / 2 + 300);
}

function loadGameOver() {
    background(backgroundColor[0]);
    fill(textColor);
    text("You starved and died.", width / 2, height / 2 + 250);
}
/**
 * Draw description
*/
function passLevel(key, level, answer) {
    if (key === answer && currentLevel === level) {
        animateDoor = true;
        doorOpeningSound.play();
        setTimeout(() => {
            currentLevel++;
            console.log(currentLevel);
            background(backgroundColor[currentLevel]);
            animateDoor = false;
        }, 1000);
    } else {
        lives--;
        background(backgroundColor[currentLevel]);
        updateLivesText();
    }
}


function keyPressed() {
    // DON'T LOOK AT THE ANSWERS BEFORE PLAYING THE GAME
    passLevel(key, 1, "c");
    passLevel(key, 2, "h");
    passLevel(key, 3, " ");
    passLevel(key, 4, "=");
    passLevel(key, 5, "[");
}

function draw() {
    // different game level management
    if (lives === 0) {
        currentLevel = 100; //Game over
    }
    if (currentLevel === 1) {
        loadLevel1();
    } else if (currentLevel === 2) {
        loadLevel2();
    } else if (currentLevel === 3) {
        loadLevel3();
    } else if (currentLevel === 4) {
        loadLevel4();
    } else if (currentLevel === 5) {
        loadLevel5();
    }
    
    
    
    else if (currentLevel === 100) {
        loadGameOver();
    }
}