# Student Grade Calculator

This JavaScript program prompts the user to enter a student's marks between 0 and 100, then calculates and displays the corresponding grade based on the marks entered.

## How It Works

- The program uses a prompt to get the student's marks.
- It defines a main function `calculateStudentGrade` that checks if the entered marks are between 0 and 100.
- Within this main function, another function `gradeCalculator` assigns a grade based on the marks:
  - A: Marks greater than 79
  - B: Marks between 61 and 79
  - C: Marks between 50 and 60
  - D: Marks between 41 and 49
  - E: Marks 40 and below
- The grade is then displayed in an alert box.

## Code

```javascript
// Define a variable that will contain prompt message
let studentsMarks = prompt("Enter the student's marks between 0 and 100");

// Declare a main function that will calculate the grade
function calculateStudentGrade(studentsMarks) {
    if (studentsMarks >= 0 && studentsMarks <= 100) {
        // Declare a function that will assign grade according to marks entered
        function gradeCalculator(marks) {
            if (marks > 79) {
                return 'A';
            } else if (marks > 60 && marks <= 79) {
                return 'B';
            } else if (marks > 49 && marks <= 59) {
                return 'C';
            } else if (marks > 40 && marks <= 49) {
                return 'D';
            } else if (marks <= 40) {
                return 'E';
            } else {
                return 'Input the correct marks';
            }
        }
        return gradeCalculator(studentsMarks);
    } else {
        return "Input the correct marks";
    }
}

// Call the main function
let grade = calculateStudentGrade(studentsMarks);

// Give the output in form of alert
alert("The student's grade is: " + grade);