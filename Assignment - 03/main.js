// Assignment: 03 Name Cases: 
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// SOLUTION:
var personName = "muhammad sarim khan";
// lowercase:
console.log("Lowercase = ", personName.toLowerCase());
// Uppercase:
console.log("Uppercase = ", personName.toUpperCase());
// Titlecase:
var words = personName.split(" ");
var titleCaseName = "";
for (var i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log("Titlecase = ", titleCaseName);
