//problem 1
/*
let age = prompt("Enter your age:");
age = parseInt(age);
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
*/

//problem 2
// switch (age) {
//     case 18:
//         console.log("You are 18 years old.");           
//         break;
//     case 25:
//         console.log("You are 25 years old.");
//         break;
//     default:
//         console.log("You are not 18 or 25 years old.");
// }

//prblem 3
/*
let num = prompt("Enter a number:");
num = parseInt(num);    
if(num % 2 == 0) {
    console.log("The number is divisible by 2.");
} else if(num % 3 == 0) {
    console.log("The number is divisible by 3.");
}else{
    console.log("The number is not divisible by 2 or 3.");
}
*/

//problem 4
let num1 = prompt("Enter the first number:");
num1 = parseInt(num1);
if(num1% 2 == 0 && num1 % 3 == 0) {
    console.log("The number is divisible by both 2 and 3.");
} else {
    console.log("The number is not divisible by both 2 and 3.");
}