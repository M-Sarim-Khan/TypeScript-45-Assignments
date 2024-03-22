// Assignment:44: Sandwiches: 
// Write a function that accepts an array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// SOLUTION:
function sandwich(items:string[]) {
    console.log("\n\nThe items being used in making your sandwhich are:");

    items.forEach(item => console.log("." + item));
}
sandwich(["Mozzarella Cheese", "Lettuce", "Hot sauce"]);
sandwich(["Bacon","Barbecue sauce"]);
sandwich(["roasted chicken breast", "Pickles", "Ketchup"]);