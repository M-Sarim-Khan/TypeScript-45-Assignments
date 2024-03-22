// Assignment:19: Dinner Guests: 
// Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// SOLUTION:
let guestList = ["Farhan", "Mohsin", "ALi", "Ramiz", "Hunain"];

for (let i = 0; i < guestList.length; i++) {
    console.log(`${i + 1}. ${guestList[i]}`);  
}

console.log(`I am inviting "${guestList.length}" number of people on dinner`);