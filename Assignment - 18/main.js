var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Assignment:18: Seeing the World: 
// Think of at least five places in the world you’d like to visit.
// • Store the locations in an array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// SOLUTION:
var placesToVisit = ["finland", "Argentina", "Brazil", "Denmark", "China"];
// • Print your array in its original order.
console.log("original order = ", placesToVisit);
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order = ", __spreadArray([], placesToVisit, true).sort());
// • Show that your array is still in its original order by printing it.
console.log("original order = ", placesToVisit);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order = ", __spreadArray([], placesToVisit, true).reverse());
// • Show that your array is still in its original order by printing it again.
console.log("Still in original order = ", placesToVisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse order = ", placesToVisit.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse order again = ", placesToVisit.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("In Alphabetical order = ", placesToVisit.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("In reverse alphabetical order = ", placesToVisit.reverse());
