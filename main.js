/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/



// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.

function somethingFunny () {
  document.getElementById("q1").innerHTML = "Something funny";
};

somethingFunny();

// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.
function divideByTwo(number) {
  return number / 2;
};

document.getElementById("q2btn").addEventListener("click", function () {
  var numberEntered = document.getElementById("q2input").value;
  document.getElementById("q2").innerHTML = divideByTwo(numberEntered);
});

// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.
function greeting (first1, first2) {
  return "Hello, " + first1 + "! How's it going, " + first2 + "?";
};

document.getElementById("q3btn").addEventListener("click", function () {
  var name1 = document.getElementById("q3inputA").value;
  var name2 = document.getElementById("q3inputB").value;
  document.getElementById("q3").innerHTML = greeting(name1, name2);
});

// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.
function average(num1, num2, num3, num4, num5, num6) {
  return (num1 + num2 + num3 + num4 + num5 + num6) / 6;
};

document.getElementById("q4").innerHTML = average(40, 10, 5, 6, 9, 5);


// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.

function monthTotal (pricePerUnit) {
  var total = pricePerUnit * 6;
  document.getElementById("q5").innerHTML = total;
};

 monthTotal(6.95);


// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

function area (height, width) {
  var areaResult = height * width;
  document.getElementById("q6").innerHTML += "<p>Area = " + areaResult + "</p>";
};
function perimeter (height, width) {
  var perimeterResult = height * 2 + width * 2;
  document.getElementById("q6").innerHTML += "<p>Perimeter = " + perimeterResult + "</p>";
};

area(6, 4);
perimeter(6, 4);

// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
function quarter (number) {
  return number / 4;
};

document.getElementById("q7").innerHTML = quarter(44);


// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings (hours) {
  if (hours >= 8) {
    document.getElementById("q8").innerHTML = "You're getting enough sleep.";
  } else {
    document.getElementById("q8").innerHTML = "You should sleep more.";
  }
};

sleepings(7.9);



// 9. Develop a function that determines a person's age by asking them for their birth year.

function countYear(birthYear) {
  var yearResult = 2016 - birthYear;
  document.getElementById("q9").innerHTML = yearResult;
};

document.getElementById("q9btn").addEventListener("click", function() {
  var yearInput = document.getElementById("q9input").value;
  countYear(yearInput);
});



// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.
     teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
var teamA = [];
var teamB = [];

function teamSeparate(team) {
  for (i = 0; i < team.length; i++) {
    if (i % 2 === 0) {
      teamA.push(team[i]);
    } else {
      teamB.push(team[i]);
    }
  }
  var teamAjoin = teamA.join(", ");
  var teamBjoin = teamB.join(", ");
  document.getElementById("q10para1").innerHTML += teamAjoin;
  document.getElementById("q10para2").innerHTML += teamBjoin;
};

teamSeparate(teammates);

// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.
function threeDigitAdd(digit1, digit2, digit3) {
  var digitResult = digit1 + digit2 + digit3;
  document.getElementById("q11").innerHTML = digitResult;
};

document.getElementById("q11btn").addEventListener("click", function() {
  var digitArray = document.getElementById("q11input").value;
  var digitA = parseInt(digitArray[0]);
  var digitB = parseInt(digitArray[1]);
  var digitC = parseInt(digitArray[2]);
  threeDigitAdd(digitA, digitB, digitC);
});


// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.

function piggy(quarters, dimes, nickels, pennies) {
  var quarterTotal = (quarters * 0.25);
  var dimeTotal = (dimes * 0.10);
  var nickelTotal = (nickels * 0.05);
  var pennyTotal = (pennies * 0.01);
  var piggyTotal = (quarterTotal + dimeTotal + nickelTotal + pennyTotal);
  return "$" + piggyTotal.toFixed(2);
};

var piggyBank = piggy(4, 10, 10, 5);
document.getElementById("q12").innerHTML = piggyBank;











// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

var phoneInput;
var phoneLength;
var q16 = document.getElementById("q16");

function phoneClean(input) {
  if (input === 10) {
    q16.innerHTML += "<p>" + phoneInput + "</p>";
  } else if (input < 10 || input > 11) {
    q16.innerHTML += "<p>Bad number</p>";
  } else if (input === 11 && phoneInput.charAt() === "1") {
    q16.innerHTML += "<p>" + phoneInput.substring(1) + "</p>";
  } else {
    q16.innerHTML += "<p>Bad number</p>";
  }
};
document.getElementById("q16btn").addEventListener("click", function () {
  phoneInput = document.getElementById("q16input").value;
  phoneLength = phoneInput.length;
  phoneClean(phoneLength);
});


// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]

function numOrNot (testNumber) {
  var nanResult = isNaN(testNumber);
  return nanResult;
};

for(t = 0; t < arrayOfAllTheThings.length; t++) {
  if (numOrNot(arrayOfAllTheThings[t]) === true) {
    document.getElementById("q17").innerHTML += "<p>" + arrayOfAllTheThings[t] + " = NaN</p>";
  } else {
    document.getElementById("q17").innerHTML += "<p>" + arrayOfAllTheThings[t] + " = NUMBER</p>";
  }
};


// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.

function diceRoll() {
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  var dice = die1 + die2;
  return dice;
};

document.getElementById("q18").innerHTML = "Roll = " + diceRoll();

// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

var boardLength = 40;
var boardTravelled = 0;
var diceResult;
var diceNum = [];

function monopolyRoll () {
  do {
    diceResult = diceRoll();
    boardTravelled += diceResult;
    diceNum.push(diceResult);
    document.getElementById("q19").innerHTML += "<p>You rolled a " + diceResult + "</p>";
  } while (boardTravelled < boardLength);
    document.getElementById("q19").innerHTML += "<p>YOU MADE IT AROUND THE BOARD IN " + diceNum.length + " ROLLS!</p>";
};

monopolyRoll();


// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.
var yearInput;

document.getElementById("q20btn").addEventListener("click", function () {
  yearInput = document.getElementById("q20input").value;
  leapYear(yearInput);
});

function leapYear(year) {
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    document.getElementById("q20").innerHTML += "<p>" + year + " = leap year</p>";
  } else {
    document.getElementById("q20").innerHTML += "<p>" + year + " = normal year</p>";
  }
};
