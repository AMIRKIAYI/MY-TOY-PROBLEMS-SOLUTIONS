
// Define a variable that will contain prompt message
let studentsMarks = prompt("Enter the student's marks between 0 and 100");

// Declare a main function that will calculate the grade
function calculateStudentGrade(studentsMarks){
    if(studentsMarks >= 0 && studentsMarks <= 100){
        // Declare a function that will assign grade according to marks entered
        function gradeCalculator(marks){
            if(marks > 79){
                return 'A';
            }else if(marks > 60 && marks <= 79){
                return 'B';
            }else if(marks > 49 && marks <= 59){
                return 'C';
            }else if(marks > 40 && marks <= 49){
                return 'D';
            }else if(marks <= 40){
                return 'E';
            }else{
                return 'Input the correct marks'
            }
        }
        return gradeCalculator(studentsMarks);
    }else{
        return "Input the correct marks"; 
    }
}
// call the main function
let grade = calculateStudentGrade(studentsMarks);

// give the output inform of alert
alert("The student's grade is: " + grade);
