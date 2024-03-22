// Assignment:21:
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// SOLUTION:
interface ItCourse {
    Name: string;
    RollNo: number;
    DistanceLearning: boolean;
    City: string;
    Center: string;
    Campus: string;
    Days: string;
    Onsite: boolean;
};

let ItCourse = {
    Name: "Muhammad Sarim Khan",
    RollNo: 36402,
    DistanceLearning: false,
    City: "Karachi",
    Center: "Governor House Sindh",
    Campus: "Main",
    Days: "Sunday",
    Onsite: true,
};

console.log(ItCourse)