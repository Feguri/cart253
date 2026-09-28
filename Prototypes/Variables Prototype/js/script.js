/**
 * Variable prototype 1
 * Felipe Paiva
 * 
 * This project comprises of two points, the mouse point that changes and the origin point. It draws an object based on the distance between
 * those two points.
 */

"use strict";

/**
 * Setup creates a Canvas of a certain dimension (500x500)
*/
function setup() {
    createCanvas(500, 500);
}

/**
 * Function uses variables, mouse tracking, and if statements to display squares in the line between a single 
 * determined point (also a var) and the mouse.
*/
function draw() {
    background(220)
    noStroke();
    fill('black');
    // defines the varibles used in the program
    var origin = {x: 250, y:250};
    var interval = 20;
    var fillerObject = square(origin.x, origin.y, 50);

    function getDistances(p1, p2) {

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const points = [];

        // If the interval is larger than the distance, return the starting point (catching problems early!)
        if (distance === 0 || interval > distance) {
            return { points: [{ x: p1.x, y: p1.y }] };
        }

        // Calculate how many points fit in between, then roundit with Math.floor
        const numberOfPoints = Math.floor(distance / interval);

        // Calculate unit vector directions
        const unitX = dx / distance;
        const unitY = dy / distance;

        // Generate the points
        for (let i = 1; i <= numberOfPoints; i++) {
            const currentDistance = i * interval;
            points.push({
                x: Number((p1.x + unitX * currentDistance).toFixed(2)),
                y: Number((p1.y + unitY * currentDistance).toFixed(2))
            });  
        }
        return { points };
    }

    function drawSquare(x, y) {
        rectMode(CENTER); 
        noStroke();
        fill('black');
        square(x, y, 50);
    }

    let mouseOrigin = {x: mouseX, y: mouseY};
    let distancesArray = getDistances(origin, mouseOrigin);

    // checks if there are distances and points before drawing them
    if (distancesArray && distancesArray.points) {
        // loop to draw each square
        for (let i = 0; i < distancesArray.points.length; i++) {
            // Grab the current point object instance
            let currentPoint = distancesArray.points[i];
            drawSquare(currentPoint.x, currentPoint.y);
        }
    }
            
}
