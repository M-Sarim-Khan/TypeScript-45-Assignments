// Assignment:16: More Guests: 
// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// SOLUTION:
// from exercise 15:
let guestList = ["Huzaifa", "Arham", "Ramiz"];

console.log(`"Due to some personal reasons our guest Mr.${guestList[1]}, will not be able to join us for iftar on sunday"`);

guestList.splice(1, 1, "Abdullah");
console.log(guestList);

// now 16:
console.log("Good News Guys!, we have found a bigger dinner table so, we are inviting our more friends for iftar on sunday")

// at beginning:
guestList.unshift("Haris");

// at middle:
guestList.splice(2, 0, "Saad");

// at end:
guestList.push("Moosa");


guestList.forEach((iftarList) => {
    console.log(`"Assalam-u-Alikum ${iftarList}, would you like to join me for iftar on sunday"`);
});