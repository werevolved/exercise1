//question 1

var name = "Rob";

// question 2

var greeting = "Hello " + name;

// question 3

var success = true && false && !true;

// question 4

//make question numbers

//question 5
var call =  function() {
	console.log("Brainstation");

}
//question 6

call();

//question 7

// function with ()name logs "hello "name

var hello = function(name){

	console.log("Hello " + name);
}

hello("joe");

//question 8 a is true b is false ||
var a = true;
var b  = false;
var trueFalse = function(a,b){

	return (a || b);
}

trueFalse(a,b);

//question 9  
// we use git to perform version control- it keeps "versions" of our code on hand and logs changes between them (in case of error).

//question 10

//pass if

var greaterThan = function(value){

	if (value >= 2){
		console.log("pass");
	}
	else {
		console.log("fail");
	}
}

//question 11

for (var i = 0; i < 13; i++){
	console.log("Hello world");
}

//question 12

var myNumbers = [0,1,2,3,4,5];
console.log(myNumbers);

//question 13

//iterate and sum over an array

var total = 0;

function sum(input) {
    for (var j=0; idx<=myNumbers.length; idx++) {
        total += input[idx];
    }
    console.log(total);
}

//question 14
//add 12-55 to myNumbers

myNumbers.push(12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55);
console.log(myNumbers);

//question 15 use person constructor object. person has properties name and address. should take these as parameters.
function Person(name,address) {
    this.name = name;
    this.address = address;
}

//question 16 create an object called computer, w/memories and screen size
//and method "turn on" logs the string powering up
function Computer(memory,screenSize,turnOn) {
	this.memories = memory;
	this.screenSize = screenSize;
	this.turnOn = function(){
		console.log("Powering up!");
	};

}

//question 17

//cfeate compuyter obj with memory 16gb screen size 24" after creating it call "turnOn"

var computer = new Computer("16gb","24 inch", turnOn);

//18 compiuter store (name,address) and method (makeComputer), method makes computer object

function ComputerStore(name,address,makeComputer) {
	this.name = name;
	this.address = address;
	this.makeComputer = function(Computer)

}

