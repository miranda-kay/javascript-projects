// Initialize Variables below

let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maxiumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = 100%
let weatherStatus = "clear"
let preparedForLiftOff = true

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {
    console.log('this mission cannot have' + '' + astronautCount + '' + 'astronauts on board');
    preparedForLiftOff = false;
}

// add logic below to verify all astronauts are ready

if (astronautStatus !== "ready") {
    console.log("Not all" + '' + astronautCount + '' + 'astronauts are ready for launch');
    preparedForLiftOff = false;
} 

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg > maxiumMassLimit) {
    console.log("Total mass exceeds the max limit. Shutting down.");
    preparedForLiftOff = false;
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp ) {
    console.log("Fuel temp is outside of range.");
    preparedForLiftOff = false;
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel !== "100%") {
    console.log("Fuel level is insufficient.");
    preparedForLiftOff = false;
}

// add logic below to verify the weather status is clear

if (weatherStatus !== "clear") {
    console.log("Weather status is not clear.");
    preparedForLiftOff = false;
}

// Verify shuttle launch can proceed based on above conditions

if (preparedForLiftOff) {
    console.log('All systems are go! Initiating space shuttle launch sequence.')
}