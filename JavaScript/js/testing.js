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

// //problem 4
// let num1 = prompt("Enter the first number:");
// num1 = parseInt(num1);
// if(num1% 2 == 0 && num1 % 3 == 0) {
//     console.log("The number is divisible by both 2 and 3.");
// } else {
//     console.log("The number is not divisible by both 2 and 3.");
// }


// function dicCal(discunt){
//   return function(price){
//       return price - price * (discunt / 100);
//     }
// }

// let discunter = dicCal(10)
// console.log(discunter(200));

// let arr = [15,62,3,4,25,85,47];
// arr.unshift("pineapple");
// arr.push("mango");
// arr.pop(3);
// arr.splice(2,0,"kivi","govava");



// let arr = [
//   {id :1, key:4},
//   {id :2, key:5},
//   {id :3, key:4},
// ];

// let ans = arr.find(function(val){
//     return val.key === 4;
// });
// console.log(ans);
// // console.log(ans);

// let newarr = arr.map(function(val){
//     return val*val;
// });

// let = newarr = arr.filter(function(val){
//     return val>10;
// });

// let sum = arr.reduce(function(acc,val){
//     return acc + val; 
// },0);

// let arr2 = [1,2,3,4,5,6];
// let final = [...arr , ...arr2];

// let obj = {
//     name: "shalini",
//     age: 20,
//     email: "shalini@gmail.com",
//     location: {
//         state:"UP",
//         city:"varanasi",
//     }

// };

// // let obj2 = JSON.parse(JSON.stringify(obj));

// Object.entries(obj).forEach(element => {
//     console.log(element[0]+ ": "+ element[1]);
// });

//DOM

// let img = document.querySelector("img");
// img.setAttribute("src","https://movieswetextedabout.com/wp-content/uploads/2025/09/Demon-Slayer-Infinity-Castle-Banner.jpg");

// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

// let a = document.querySelector("a");
// a.removeAttribute("href");

// let h1 = document.createElement("h1");
// h1.textContent = "hello ji kaise ho";
// // console.log(h1);
// document.querySelector("body").append(h1);

// h1.style.color = "yellow";
// h1.style.backgroundColor = "black";
// h1.style.fontFamily = "Gilroy";
// h1.style.textTransform = "capitalize";

// let  headings = document.querySelectorAll("li");

// headings.forEach(function(val){
//     console.log(val);
// })


// let a = document.querySelector("a");
// a.href = "http://www.google.com";

// let p = document.querySelectorAll("p");
// p.forEach(function(ele){
//     ele.style.fontSize = "50px";
// });


// let p = document.querySelector("p");

// function dblclick() {
//     p.style.color = "green";
// }

// p.addEventListener("dblclick",dblclick);

// let h = document.querySelector("h1");
// h.addEventListener("dblclick",dblclick);

// let input = document.querySelector("input");

// function textdata(dats){
//     if(dats.data !== null){
//         console.log(dats.data);
//     }
// }

// input.addEventListener("input" , textdata);

// let sel = document.querySelector("select");

// let divce = document.querySelector("#divce");
// sel.addEventListener("change" , function(dats){
//     divce.textContent = `${dats.target.value} divce selected`;
// });

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function (dats) {
//     // console.log(dats);
//     if(dats.key == " "){
//         h1.textContent = "spc";
//     }else{
//         h1.textContent = dats.key;
//     }
// });

// let btn = document.querySelector("#btn");

// let fileIn = document.querySelector("#inputfile");

// btn.addEventListener("click" , function(){
//     fileIn.click();
// });

// fileIn.addEventListener("change", function(dats){
//     const file = dats.target.files[0];
//     if(files !== null){
//         btn.textContent = file.name;
//     }
// })
 
// form here form that make card of all the given data----------->
/*
let main = document.querySelector(".main");
let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");

form.addEventListener("submit" , function(dats){
    dats.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;

    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;

    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    inputs.forEach(function(inp){
        if(inp.type != "submit"){
            inp.value = "";
        }
    });


}); */

//MOUSE events----->
// let main = document.querySelector("#main");

// main.addEventListener("mouseover",function(){
//     main.style.backgroundColor = "yellow";
// });

// main.addEventListener("mouseout",function(){
//     main.style.backgroundColor = "green";
// }); 

// window.addEventListener("mousemove", function(dats){
//     main.style.top = dats.clientY + "px";
//     main.style.left = dats.clientX + "px";
// })

//bubbling----->

// let ul = document.querySelector("ul");

// ul.addEventListener("click", function(dats){
//     dats.target.classList.toggle("lt")
// })

// captureing-->

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     console.log("btn clicked");
// });

// a.addEventListener("click",
//     function(){
//         console.log("a clicked");
//     },true
// );

// b.addEventListener("click",function(){
//     console.log("b clicked");
// });

// c.addEventListener("click",
//     function(){
//         console.log("c clicked");
//     },true
// );

// live charecter count--->

// let inp = document.querySelector("input");
// let span = document.querySelector("span");

// inp.addEventListener("input", function(){
//     // console.log("input huaa");
//     span.textContent = inp.value.length;

// });



//email and password valiadter---->

// let form = document.querySelector("form");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");

// form.addEventListener("submit",function(dats){
//     dats.preventDefault();
//     document.querySelector("#emailerror").textContent = "";
//     document.querySelector("#passworderror").textContent = "";

//     let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

//     // console.log(emailRegex.test("test@gmail.com")); // true
//     // console.log(passwordRegex.test("Password1@")); // true

//     let emailAns = emailRegex.test(email.value);
//     let passwordAns = passwordRegex.test(password.value);
//     let isVailed = true;

//     if(!emailAns){
//         document.querySelector("#emailerror").textContent = "enter vailed email";
//         document.querySelector("#emailerror").style.display = "initial";
//         let isVailed = false;
//     }

//     if(!passwordAns){
//         document.querySelector("#passworderror").textContent = "password is worng";
//         document.querySelector("#passworderror").style.display = "initial";
//         let isVailed = false;
//     }

//     if(isVailed){
//         document.querySelector(".sucess").textContent = "submitted succefully";
//     }
// });
 


// timers and intervals

let count = 14;

let interval = setInterval(function(){
    if(count>0){
        count--;
        console.log("hello" + count);
    }else{
        clearInterval(interval);
    }
},1000);