let currentDate = new Date(),
  month = currentDate.getMonth() + 1,  
  day = currentDate.getDate(),
  year = currentDate.getFullYear();
console.log(month + "/" + day + "/" + year)
let currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes();

	if (minutes < 10) {
	 minutes = "0" + minutes;
  }

	let suffix = "AM";
	if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
	}
	if (hours == 0) {
	 hours = 12;
	}

	console.log(hours + ":" + minutes + " " + suffix)


let num = "7";
let n = num.toString();
console.log(n);

let seven = '7';
parseInt(seven);
console.log(seven);

let num1 = 9;
let num2 = 28;
console.log(num1 + num2);

let thisNum = 1;
let thatNum = 1;

if(thisNum && thatNum) { 
    console.log("Both are TRUE") 
  };

let aNum = 2;
let bNum = 1;

if(aNum || bNum) { 
    console.log("One of these are TRUE") 
  };

let a = "I am defined";
let b;
if (b !== undefined) {
  console.log("'a' is defined, so 'a' is truthy")
} else {
  console.log("Neither is TRUE")
}

let iKnowWhatImDoing = !true;
console.log(iKnowWhatImDoing)
let iFeelLikeIKnowWhatImDoing = null;
console.log(iFeelLikeIKnowWhatImDoing)

function test(t) {
  if (t === undefined) {
    return 'Undefined value';
  }
  return t;
}
let x;
console.log(test(x));

function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}
console.log(sanitise('NotANumber'));

let thisString = "This String"
console.log(thisString);

// your variable
var myBool = false;

// function declaration
function isTypeOf(data) {
  return console.log(typeof data);
}

// function invocation
isTypeOf(myBool);

// replace "myBool" with the other names of your variable each time you run it

// OR copy/paste "isTypeOf()" once for each variable you have and place each variable name inside the "()". Make sure your variables are above your function invocation, else they will be "undefined"!