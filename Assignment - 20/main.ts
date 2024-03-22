// Assignment:20:
// Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// SOLUTION:
let rivers = ["Indus", "Jhelum", "Chenab", "Ravi", "Sutleg", "Beas"];
console.log("List of Rivers:");
for (let i = 0; i < rivers.length; i++) {
  console.log(`${i + 1}. ${rivers[i]}`);
}
