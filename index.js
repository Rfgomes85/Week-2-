//Boolean
 let ageRequiredToDrive = 16;
 
 let currentAge = 14;
 
 let canPersonDrive = currentAge >= ageRequiredToDrive;

 console.log(canPersonDrive); 
 //if
if (canPersonDrive) {
    console.log('This person can drive');
 } else {
    console.log('This person cannot drive');
 }

//Conditions
 let costOfEggs = 2.12;
 let numberOfDozenOfEggsToPurchase = 0;

 if (costOfEggs > 3) {numberOfDozenOfEggsToPurchase = 1;
 } else if (costOfEggs > 2) { numberOfDozenOfEggsToPurchase = 2;
} else if (costOfEggs > 1) {numberOfDozenOfEggsToPurchase = 3;
} else {
    numberOfDozenOfEggsToPurchase = 4;
}
console.log(' I will buy ' + numberOfDozenOfEggsToPurchase  +  ' dozen eggs ');

let costOfmilk = 2;

if (costOfmilk < 2) {
    console.log(' We will buy 2 gallons');
} else if (costOfmilk < 3) {
    console.log('We will buy 1 gallon');
} else {console.log('No thanks, way too expensive!');}



var grade = 'A';


switch (grade) {
    case 'A':
        console.log('90-100');
        break;
        case 'B':
            console.log('80-89');
        break;
        case 'C':
        console.log('70-79');
        break;
        default:
        console.log('0-69');
        
}

var a= 5;
var b= 6;

if (a == 5) {
    if (b == 7) {
    console.log('a is 5 and b is 6');
} else {
    console.log('a is 5 but b is not 6.');
}
}

if (a == 5 && b == 6) {

    console.log('a is 5 and b is 6');
}





// Looping intro
let cupsOfFlour= 0;
while (cupsOfFlour <5) {
console.log(' Scooping a cup of  flour into the bowl');

cupsOfFlour += 1;
console.log(' There are ' + cupsOfFlour + 'cups of flour in the bowl');
}
// for loop
for (let cupsOfFlour =0; cupsOfFlour < 5; cupsOfFlour++) {
    console.log('Scooping a cup of flour into a bowl');
    console.log('There are ' + cupsOfFlour + 'cups of flour into the bowl');
}
//for i loop
for (let i =1; i < 10; i+=2) { console.log(i);
}

for (let i =1; i <=100;i+=1 ){if (i % 3=== 0){
    console.log(i);
}}


let i =10;
do {
    i++;
    console.log(i);

} while (i < 3);
// user input intro 
let name = window.prompt('What is your name?');
window.alert('Welcome,' + name);


var username = prompt('Username:');

var password = prompt('Password:');

if (username == 'samy123' && password == '12345') {

    alert('Welcome back, ' + username);

} else {

    alert('Inaccurate credentials!');

}

while 
( currentCupsOfRice < requiredCupsOfRice > currentCupsOfRice++) {

console.log("The bowl contains " + currentCupsOfRice  + " cups of rice.");

}
  {
    console.log("We have enough rice!");
}