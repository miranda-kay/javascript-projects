// Code your selectRandomEntry function here:

For (let i = 0; i < 5; i++) {
  console.log(math.round(math.random()*5));
  }
  
function selectRandomEntry(arr) {
  let index = math.floor(math.random() * arr.length)
  return arr(index);
}

// Code your buildCrewArray function here:

for (let i = 0; i < idNumbers["o2Used"].length; i++) {
  let output = "";


  for (items in students) {
      output += `${students[items][i]}: `
  }
  console.log(output.slice(0, -2));
}

function buildCrewArray(candidates, selectedIDs) {
  let selectedCrew = []; 
}

let idNumbers = [291, 414, 503, 599, 796, 890];
let mass = [31.8, 90, 19.1, ]

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

