var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

let total = 0;
let previousAmount;
let months = finances.length
let amount = 0
let date;


// ✅Task 1: The total number of months included in the dataset.
  // finances.length

  let numberOfMonths = finances.length

// ✅Task 2: The net total amount of Profit / Losses over the entire period.
  // Need a variable for Profits/Losses
  // Need to be able to compare the data for the loop that we're on to the data from the previous loop
    // Need variables for current & previous once we start the loop
    // Need an if statement to make sure we're on at least month 2 (array index 1) before starting to figure profits & losses


  // we make i equal 0. 0 is the first number in an array selection. So if we want to find the first part of the array, we must search for 0. So finances[0] would equal the month displayed in the data. So finances[i] if i=0 works out to be the 

for (let i = 0; i < finances.length; i++) {
  const month = finances[i];
    date = month[0]
    amount = month[1]
}

// month = finances[i] references the "i"th element within the finances array
// amount = the profit/loss for a singular month

for (let i = 0; i < finances.length; i++) {
  const month = finances[i];
  const amount = month[1];

  // this if should define the difference between one month and the month before apart from the 0 month. changed so it's within the for loop.
  
  if (i > 0) {
    const difference = amount - previousAmount
}

total += amount;
previousAmount = amount;

}

let average = total / (numberOfMonths -1);

// this if should define the difference between one month and the month before apart from the 0 month. 


// ✅Task 3:The average of the changes in Profit / Losses over the entire period.
  // Need a variable to track the average change
  // That will make use of the current & previous variables we set up before
// You will need to track what the total change in Profit / Losses are from month to month and then find the average.
// (Total / (Number of months - 1))


let allChanges = 0;

for (let i = 1; i < finances.length; i++) {
  const currentAmount = finances[i][1];
  const previousAmount = finances[i - 1][1];
  const change = currentAmount - previousAmount;

  allChanges += change;
  
}

const averageChange = allChanges / (months - 1);

// to get the number to meet it at two decimal points, we put toFixed next to it

// console.log(averageChange.toFixed(2));

// ✅Task 4:The greatest increase in Profit / Losses(date and amount) over the entire period.
  // Need a variable for the greatest increase
  // On each iteration, compare the current change in profits/losses to what's currently stored
  // If the change is more, replace what's currently stored in the variable


let greatestIncrease = {amount: 0};

for (let i = 1; i < finances.length; i++) {
  const currentAmount = finances[i][1];
  const previousAmount = finances[i - 1][1];
  const change = currentAmount - previousAmount;

  // I want to update the greatest increase if the current change is greater than it

  if (change > greatestIncrease.amount) {
    greatestIncrease.amount = change;
    greatestIncrease.date = finances[i][0];
  }

}


// ✅Task 5:The greatest decrease in Profit / Losses(date and amount) over the entire period.
  // Need a variable for the greatest decrease
  // On each iteration, compare the current change in profits/losses to what's currently stored
  // If the loss is greater, replace what's currently stored in the variable


  let greatestDecrease = {amount: 0};

  for (let i = 1; i < finances.length; i++) {
    const currentAmount = finances[i][1];
    const previousAmount = finances[i - 1][1];
    const change = currentAmount - previousAmount;
  
    // I want to update the greatest increase if the current change is greater than it
  
    if (change < greatestDecrease.amount) {
      greatestDecrease.amount = change;
      greatestDecrease.date = finances[i][0];
    }
  
  }


// variables:
// total number of months
// rolling total of profits
// greatest increase (month & amt)
// greatest loss (month & amt)
// average of the changes

// variables declared inside the loop:
// current data point
// previous data point


// What I want to display on the console log:

console.log (`
Financial Analysis
__________________________
Total months - ${numberOfMonths}
Total - £${total}
Average Change - £${averageChange.toFixed(2)}
Greatest Increase in Profits/Losses - ${greatestIncrease.date} (£${greatestIncrease.amount})
Greatest Decrease in Profits/Losses - ${greatestDecrease.date} (£${greatestDecrease.amount})`);
