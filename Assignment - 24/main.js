// Assignment:24: More Conditional Tests: 
// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in an array
// • Test whether an item is not in an array
// SOLUTION:
var Student = "Babar";
var brand = "GUCCI";
var num1 = 5;
var num2 = 10;
var fruits = ["Mango", "Apple", "Peach", "Appricot", "Banana"];
// • Tests for equality and inequality with strings:
console.log("Is student name is Babar");
console.log(Student == "Babar");
console.log("\nIs student name is not Babar");
console.log(Student != "Babar");
// • Tests using the lower case function:
console.log("\nIs Gucci is a brand");
console.log(brand.toLocaleLowerCase() == "gucci");
console.log("\nIs Gucci is not a brand");
console.log(brand.toLocaleLowerCase() != "gucci");
// • Numerical tests:
// equality and inequality:
console.log("\nIs five is equal to five");
console.log(num1 == 5);
console.log("\nIs five is not equal to five");
console.log(num1 != 5);
// greater than and less than:
console.log("\nIs 10 is greater than 5");
console.log(num2 >= num1);
console.log("\nIs 10 is less than 5");
console.log(num2 <= num1);
// greater than or equal to, and less than or equal to:
console.log("\nIs 10 is greater than or equal to 10");
console.log(num2 >= 10);
console.log("\nIs 10 is greater less or equal to 5");
console.log(num2 <= 5);
// • Tests using "and" and "or" operators
console.log("\nIs 20 is equal to 20 and 25 is less than 20");
console.log(20 == 20 && 25 < 20);
console.log("\nIs 20 is equal to 20 and 25 is less than 30");
console.log(20 == 20 && 25 < 30);
console.log("\nIs 5 is equal to 5 OR 25 is greater than 20");
console.log(5 == 5 || 25 > 20);
console.log("\nIs 5 is greater than or equal to 10 OR 25 is less than 20");
console.log(5 >= 10 || 25 < 20);
// • Test whether an item is in an array
console.log("\nIs Mango is present in an array?");
console.log(fruits.includes("Mango"));
// • Test whether an item is not in an array
console.log("\nIs Orange is present in an array?");
console.log(fruits.includes("Orange"));
