// Assignment:15: Changing Guest List: 
// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating 
// the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
// SOLUTION:
let guestList = ["Huzaifa", "Arham", "Ramiz"];

console.log(`"Due to some personal reasons our guest Mr.${guestList[1]}, will not be able to join us for iftar on sunday"`);

guestList.splice(1, 1, "Abdullah");
guestList.forEach((iftarList) => {
    console.log(`"Assalam-u-Alikum ${iftarList}, would you like to join me for iftar on sunday"`);
});

