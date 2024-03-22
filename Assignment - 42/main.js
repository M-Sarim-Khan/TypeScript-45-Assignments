// Assignment:42: Great Magicians: 
// Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// SOLUTION:
let MagicianName = ["Harry Potter", "Criss Angel", "David Blaine", "Harry Houdini", "Merlin"];
function make_great(MagicianNameArray) {
    for (let i = 0; i < MagicianNameArray.length; i++) {
        MagicianName[i] = "The Great " + MagicianNameArray[i] + ".";
    }
}
function show_magicians(magician) {
    magician.forEach(magicians => {
        console.log(magicians);
    });
}
make_great(MagicianName);
show_magicians(MagicianName);
export {};
