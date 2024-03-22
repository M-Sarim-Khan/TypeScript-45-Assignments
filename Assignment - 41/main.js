// Assignment:41: Magicians: 
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// SOLUTION:
let MagicianName = ["Harry Potter", "Criss Angel", "David Blaine", "Harry Houdini", "Merlin"];
function show_magicians(magician) {
    magician.forEach(magicians => {
        console.log(magicians);
    });
}
show_magicians(MagicianName);
export {};
