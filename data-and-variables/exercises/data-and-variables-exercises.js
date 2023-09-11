// Declare and assign the variables below
let nameOfSpaceShuttle;
nameOfSpaceShuttle = "Determination";
let shuttleSpeedInMPH;
shuttleSpeedInMPH = "17500"
let distanceToMarsInKM;
distanceToMarsInKM = "225000000";
let distanceToTheMoonInKM;
distanceToTheMoonInKM = "384400";
let milesPerKilometer;
milesPerKilometer = "0.621";

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof "determination");
console.log(typeof 17500);
console.log(typeof 225000000);
console.log(typeof 384400);
console.log(typeof 0.621);

// Calculate a space mission below
let milesToMars;
milesToMars = distanceToMarsInKM * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedInMPH;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(nameOfSpaceShuttle + " will take " + daysToMars + " days to reach Mars. ");

// Calculate a trip to the moon below
let milesToMoon = distanceToTheMoonInKM * milesPerKilometer;
let hoursToTheMoon = milesToMoon / shuttleSpeedInMPH;
let daysToTheMoon = hoursToTheMoon / 24;

// Print the results of the trip to the moon below
console.log(nameOfSpaceShuttle + " will take " + daysToTheMoon + " days to reach the moon. ");
