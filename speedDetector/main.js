// Define all variables that will be used.

let speed = 135;
const speedLimit = 70;
const addSpeed = 5;
// Define points by giving it a formula  to calculate it.
let points = (speed-70)/5;

// Use function to calculate and give output of demerit points
function calculatepoints(speed){
    if (speed <= speedLimit){
        console.log("Ok")
    }else if(speed > speedLimit && points <= 12){
        return points
       
    }else{
        console.log("license suspended")
    }
}

// call the function.
calculatepoints(speed)


// print the points.
console.log(points)
