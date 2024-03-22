// Assignmet:43: Unchanged Magicians: 
// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// SOLUTION:
let MagicianName:string[] = ["Harry Potter", "Criss Angel", "David Blaine", "Harry Houdini", "Merlin"];

function copyArray(arr:string[]) {
    return [...arr];
}

function make_great(MagicianNameArray:string[]) {
    for (let i = 0; i < MagicianNameArray.length; i++) {
        MagicianNameArray[i] = "The Great " + MagicianNameArray[i] + ".";
    }
}

function show_magicians(magician:string[]) {
    magician.forEach(magicians => {
        console.log(magicians);
    })
}

const copyMagicianArray = copyArray(MagicianName);
make_great(copyMagicianArray);

console.log("\n\nThis is my orignal array. ")
show_magicians(MagicianName);

console.log("\n\nThis is my modified orignal array. ")
show_magicians(copyMagicianArray);