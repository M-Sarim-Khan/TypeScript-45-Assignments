// Assignment:19: Dinner Guests: 
// Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// SOLUTION:
var guestList = ["Farhan", "Mohsin", "ALi", "Ramiz", "Hunain"];
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(i + 1, ". ").concat(guestList[i]));
}
console.log("I am inviting \"".concat(guestList.length, "\" number of people on dinner"));
