// DataTypes 

//use within the scope of the whole program
var myName = "name";

//only be used withion the scope of where you declared them
let ourName = "names1";

// cant change 
const pi = 3.14;

var myStr = "i am a \"double\" quoted string";
var myStr1 = 'i am a "double" quoted string';

/* 
\\ backslash 
\n newline 
\t tab 
\b backspace 

*/

// Concatenation
var newString = "i come first" + "i come second";
var ourString = "i come first"; 
ourString += "i come second";

length = ourString.length;
firstLetter = ourString[0];

// string imutability
myString = "Jello"; 

myString[0] = "H"; // wont work because of immutability
myString = "Hello"; 

lastLetter = myString[myString.length - 1];


//WordBlank Game 

function wordBlank(myNoun, myAdjective, myVerb, myAdverb){
    var result; 

    result += "The " + myAdjective + " " + myNoun + " " + myVerb + "to the store"; 

    return resultl
}

console.log(wordBlank("dog","big","run","quickly"));


// Arrays 

var ourArray = [4, true, "string"];
myData = ourArray[1];
ourArray[2] = "new string";


var ourArray2 = [[2,4],[true,"some string"]];
var myData2 = ourArray2[0][1]; // prints 4

var newArray = ["string",true,90]
newArray.push(["new","one"]); // adds to the end of the array
newArray.push("new string");
newArray.unshift("javaScript"); // adds to the beginnig of the array

var popVariable = newArray.pop(); // removes last item and stores in variable 
var popVariable = newArray.shift(); // removes first item and stores in variable 


// Functions 

function ourFunction(a, b){
    console.log(a - b);
}

ourFunction(1, 7);

// Global scope and functions (scope is the visibility of variables)
var myGlobal = 10; 

function myFunction(){
    // myGlobal is accessible here 
    newVar = 10; // becomes global because of ommision of var 
    var newVar = 23; // becomes local variable (local scope)
}

var outerWear = "Shirt";

function myOutfit(){
    var outerWear = 'Coat';

    return outerWear;
}

console.log(myOutfit()); // returns Coat
console.log(outerWear); // returns shirt


var changed = 0; 

function change(num) {
    return (num + 5) / 3;
}

changed = change(34);


function nextLine(arr, item){

    arr.push(item);

    return arr.shift();
}

var testArr = [1,2,4,5,6,8];

console.log(nextLine(testArr, 6)); 


// Conditional Logics 

/*  == equality (performs a type conversion 
3 == '3' evaluates to true 
    */

/*  === strict equality (does not covert typeof 
3 == '3' evaluates to false
    */


function switchOf(val){
    var answer = "";

    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "b";
            break;

        case "c":
            answer = "cat";
            break;

        default:
            answer = "stuff"; 
            break;
    }

    return answer;
}

console.log(switchOf("c")); 

function mySize(num){

    switch(num){
        case 1:
        case 2:
        case 3:
            answer = "low";
        case 4:
        case 5:
        case 6:
            answer = "medium";
        case 7:
        case 8:
        case 9:
            abswer = "high";

    }

    return answer;


}

console.log(mySize(4));


// Objects 

var ourDog = {
    "name": "pinto", 
    "legs": true,
    "tails": 1,
    24:"number"
}

var name = ourDog.name; 
var name = ourDog["name"]; 

var number = 24
var myNumber = ourDog[number]

ourDog.legs = false; 

ourDog.bark = "woof!"; 
delete ourDog.bark;

ourDog.hasOwnProperty("bark"); // returns true or false if property exists 


function phoneLookUp(val){
    var result = "";

    var lookup = {
        "alpha": "adams", 
        "bravo": "boston",
        "charlie": "chicago",
        "echo": "easy"
    };

    result = lookup[val];

    return result;
}

console.log(phoneLookUp("alpha"));

var myStorage = {
    "car": {
        "inside": {
            "glove box":"maps",
            "seat":4
        }, 
        "outside": {
            "trunck": "jack"
        }
    }
};

var contents = myStorage.car.inside["glove box"]; 
console.log(contents); 

// while loops 

var myArray = []; 

var i = 0; 
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);


for(var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray)


var myArr = [2,3,4,5,6,7,8,9]; 
var ourTotal; 

for (var i = 0; i < myArr.length; i++) {
    ourTotal += myArr[i];
}

console.log(ourTotal);

function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }

        return product;
    }

    var product = multiplyAll([[1,2], [3,4], [5,6,7]]);
}


function convertInteger(str){
    return parseInt(str);
}

convertInteger("45");

// TENARY OPERATOR 

function checkEqual(a, b) {
    return a === b ? true : false 
}

checkEqual(1, 2);

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(4)); 



// var  declared locally or glo
// let makes sure the variable is defined in only the area they want defined in 
// const cant bbe reassigned  use all caps 

// arrow functions 

// normal function
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

//arrow function
const myConcat = (arr1, arr2) => arr1.concat(arr2);



console.log(myConcat[1, 3], [3, 4, 4]);

// destruction assignment 

[z, x, , y] = [1, 2, 4, 55, 6]; 
console.log(z, x, y); 

let a = 6, b = 7;

[a, b] = [b, a]; 

// template literal 
const person = {
    name: "dickson", 
    age: 67
}

const greetings = ` hello, my name is ${person.name}!
i am ${person.age} years old`;

console.log(greetings);
























