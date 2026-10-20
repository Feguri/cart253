/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 10
    }
};
// Our ball
const ball2 = {
    x: 280,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 10
    }
};
// Our paddle
const paddle = {
    x: 100,
    y: 290,
    width: 80,
    height: 10
};
// Our paddle2
const paddle2 = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};
/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);

    moveBall(ball);
    moveBall(ball2);

    handleBounce(ball, paddle);
    handleBounce(ball2, paddle);
    handleBounce(ball, paddle2);
    handleBounce(ball2, paddle2);

    drawPaddle(paddle, "red");
    drawPaddle(paddle2, "blue");
    drawBall(ball);
    drawBall(ball2);
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
    switch (key) {
        case 'd':
            paddle.x += 10
            break;
        case 'a':
            paddle.x -= 10
            break;
        case 'l':
            paddle2.x += 10
            break;
        case 'j':
            paddle2.x -= 10
    }

}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
    push()
    ball.velocity.y += 0.5
    ball.x += ball.velocity.x
    ball.y += ball.velocity.y
    pop()
}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {

    push()
    if (checkOverlap(ball, paddle)) {
        console.log('Hit the paddle!');
        ball.velocity.y *= -1;
    }
    pop()
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle, clr) {
    // ball.velocity.x += 1
    push();
    rectMode(CENTER);
    noStroke();
    fill(clr);
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();

}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
    return (rectA.x + rectA.width / 2 > rectB.x - rectB.width / 2 &&
        rectA.x - rectA.width / 2 < rectB.x + rectB.width / 2 &&
        rectA.y + rectA.height / 2 > rectB.y - rectB.height / 2 &&
        rectA.y - rectA.height / 2 < rectB.y + rectB.height / 2);
}

