// Assignment:14: Guest List: 
// If you could invite anyone, living or deceased, to dinner, who would you invite Make a list that includes at least three people you’d like to invite to dinner.Then use your list to print a message to each person, inviting them to dinner.
// SOLUTION:
var guestList = ["Huzaifa", "Arham", "Ramiz"];
guestList.forEach(function (list) {
    console.log("\"Assalam-u-Alikum ".concat(list, ", would you like to join me for iftar on sunday\""));
});
