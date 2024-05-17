let speed = 135;
const speedLimit = 70;
const addSpeed = 5;
let points = (speed-70)/5;


function calculateDemerit(speed){
    if (speed <= 70){
        console.log("Ok")
    }else if(speed > 70 && speed % 5 === 0){
        return points
        // function demerit(points){
        //     if (points <= 12){
        //         console.log(points)
        //     }else{
        //         console.log("license suspended")
        //     }
        // }
    }else{
        console.log("No speed detected")
    }
}
calculateDemerit(speed)
console.log(points)
