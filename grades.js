// Name: Caroline
// Purpose: Calculate average, minimum, or maximum grade from an array using user-selected menu option

const grades = [86, 92, 78, 88, 95, 74, 81, 90, 84, 98];

// Function to process grades
function processGrades(option, gradesArray) {
 let result;

 if (option === 1) {
     // Average
     let sum = 0;
     for (let i = 0; i < gradesArray.length; i++) {
         sum += gradesArray[i];
     }
     result = sum / gradesArray.length;
     console.log("The average of the grade is: " + result);
 } else if (option === 2) {
     // Minimum
     let min = gradesArray[0];
     for (let i = 1; i < gradesArray.length; i++) {
         if (gradesArray[i] < min) {
             min = gradesArray[i];
         }
     }
     result = min;
     console.log("The lowest grade is: " + result);
 } else if (option === 3) {
     // Maximum
     let max = gradesArray[0];
     for (let i = 1; i < gradesArray.length; i++) {
         if (gradesArray[i] > max) {
             max = gradesArray[i];
         }
     }
     result = max;
     console.log("The highest grade is: " + result);
 } else {
     console.log("Invalid option. Please choose 1, 2, or 3.");
 }
}

// Simulating user input and testing all 3 options
console.log("Menu of Options\n================\n1. Average Grade\n2. Minimum Grade\n3. Maximum Grade");

console.log("\nWhich option would you like (1-3)? > 1");
processGrades(1, grades);

console.log("\nWhich option would you like (1-3)? > 2");
processGrades(2, grades);

console.log("\nWhich option would you like (1-3)? > 3");
processGrades(3, grades);
