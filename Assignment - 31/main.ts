// Assignment:31: No Users:
// Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// SOLUTION:
let userNames:[] = [];

if (userNames.length === 0) {
  console.log(`"We need to find some users."`);
} else {
  for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === "Admin") {
      console.log(`\nHello "${userNames[i]}", Would you like to see a status report\n`);
    } else {
      console.log(`Hello "${userNames[i]}, thank youfor logging in again.`);
    }
  }
}
