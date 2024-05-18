# Car Speed Checker

This JavaScript program checks the speed of a car and calculates demerit points based on the speed limit. If the speed is within the limit, it prints "Ok". For every 5 km/h above the speed limit, it gives the driver one demerit point and prints the total number of demerit points. If the driver gets more than 12 points, the function prints "License suspended".

## How It Works

- The speed limit is set to 70 km/h.
- For every 5 km/h over the speed limit, one demerit point is given.
- If the speed exceeds the limit and the demerit points are more than 12, the driver's license is suspended.

## Code

```javascript
// Define all variables that will be used.
let speed = 135;
const speedLimit = 70;
const addSpeed = 5;

// Define points by giving it a formula to calculate it.
let points = (speed - 70) / 5;

// Use function to calculate and give output of demerit points
function calculatepoints(speed) {
    if (speed <= speedLimit) {
        console.log("Ok");
    } else if (speed > speedLimit && points <= 12) {
        return points;
    } else {
        console.log("License suspended");
    }
}

// Call the function.
calculatepoints(speed);

// Print the points.
console.log(points);