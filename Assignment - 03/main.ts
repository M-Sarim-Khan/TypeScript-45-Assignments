// Assignment: 03 Name Cases: 
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// SOLUTION:
let personName = "muhammad sarim khan";
// lowercase:
console.log("Lowercase = ", personName.toLowerCase());

// Uppercase:
console.log("Uppercase = ", personName.toUpperCase());

// Titlecase:
let words:string[]= personName.split(" ");
let titleCaseName:string = ""
for (let i = 0; i < words.length; i++) {
titleCaseName+= words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase() + " "};
console.log("Titlecase = ", titleCaseName);
