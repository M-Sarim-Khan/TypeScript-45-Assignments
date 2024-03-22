// Assignment:23: Conditional Tests: 
// Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each lineevaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// SOLUTION:

// Test 01:
let car = "Toyota";
console.log("Is car == 'Toyota'? I predict True.");
console.log(car == "Toyota");

// Test 02:
let num1 = 5;
let num2 = 8;
console.log("\nIs 5 < 8? I predict True.");
console.log(num1 < num2); 

// test 03:
let array = [12, 43, 56, 14];
console.log("\nIs array length greater than or equal to 3? I predict True.");
console.log(array.length >=3);

// test 04:
let governor = "Kamran Tessori";
console.log("\nIs Governor of Sindh is Kamran Tessori? I predict True.");
console.log(governor == "Kamran Tessori");

// test 05:
let honda = "civic";
console.log("\nIs Civic is the brand of Honda? I predict true.");
console.log(honda == "civic");

// tes 06:
console.log("\nIs car != 'Toyota'? I predict False.");
console.log(car != "Toyota");

// Test 07:
console.log("\nIs 5 > 8? I predict False.");
console.log(num1 > num2); 

// test 08:
console.log("\nIs array length greater than or equal to 5? I predict False.");
console.log(array.length >=5);

// test 09:
console.log("\nIs Governor of Sindh is not Kamran Tessori? I predict False.");
console.log(governor != "Kamran Tessori");

// test 05:
console.log("\nIs Civic is not the brand of Honda? I predict False.");
console.log(honda != "civic");