// Assignment: 17: Shrinking Guest List: 
// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// SOLUTION:
// from exercise 16
let guestList = ["Huzaifa", "Arham", "Ramiz"];

console.log(`"Due to some personal reasons our guest Mr.${guestList[1]}, will not be able to join us for iftar on sunday"`);

guestList.splice(1, 1, "Abdullah");
// now 16:
// at beginning:
guestList.unshift("Haris");
// at middle:
guestList.splice(2, 0, "Saad");
// at end:
guestList.push("Moosa");

guestList.forEach((iftarList) => {
    console.log(`"Assalam-u-Alikum ${iftarList}, would you like to join me for iftar on sunday"`);
});

// now ex 17:/
console.log("Due to some reasons the dinner table won't be arrive on time so, I can invite only two people\n");

let friendList1 = guestList.pop();
console.log(`"SORRY" Mr.${friendList1} you are not invited on iftar`);

let friendList2 = guestList.pop();
console.log(`"SORRY" Mr.${friendList2} you are not invited on iftar`);

let friendList3 = guestList.pop();
console.log(`"SORRY" Mr.${friendList3} you are not invited on iftar`);

let friendList4 = guestList.pop();
console.log(`"SORRY" Mr.${friendList4} you are not invited on iftar`);

guestList.forEach((dinner) => {
    console.log(`"${dinner}" you are still invited`);
});

guestList.pop();
guestList.pop();
console.log("Empty list = ", guestList);
