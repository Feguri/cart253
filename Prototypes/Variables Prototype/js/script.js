/**
 * Variable prototype 1
 * Felipe Paiva
 * 
 * This project comprises of
 */

"use strict";

/**
 * Setup creates a Canvas of a certain dimension (500x500)
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Function uses variables, mouse tracking, and if statements to display squares in the line betwoon a single 
 * determined point (also a var) and the mouse.
*/
function draw() {
    background(220)
    noStroke();
    fill('black');
    // defines the varibles used in the program
    var origin = {x: 0, y:0};
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

        // Calculate how many points fit in between
        const numberOfPoints = Math.floor(distance / interval);

        var finalCoordinates = {};

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

    console.log(getDistances(origin, {x: 500, y:500}))

    // gets the x and y position of the mouse
    window.addEventListener('mousemove', (event) => {

        let mouseOrigin = {x: event.clientX, y: event.clientY}
            
            const x = event.clientX;
            const y = event.clientY; 
            
    });
}
console.log(getDistances(origin, {x: 500, y:500}))