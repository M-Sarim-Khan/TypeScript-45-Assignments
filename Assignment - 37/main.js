// Assignment:37: Large Shirts: 
// Modify the make_shirt() function so that shirts are large by default, with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// SOLUTION:
function make_shirt(size, message) {
    console.log("\nCreated a \"".concat(size, "\" size shirt with a message \"").concat(message, "\" printed on it."));
}
make_shirt("Large", "I Love TypeScript");
make_shirt("Medium", "I Love TypeScript");
make_shirt("Small", "I Love JavaScript");
