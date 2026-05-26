// if else statements
//rock paper seager

// function rpc( player1, player2){
//     // let player1 = prompt; // rock-1, paper-2, seager-3
//     // let player2 = prompt; // rock-1, paper-2, seager-3
//     if(player1==1 && player2==2) return "player2 won";
//     if(player1==1 && player2==3) return "player1 won";
//     if(player1==2 && player2==3) return "player2 won";
//     if(player1==2 && player2==1) return "player1 won";
//     if(player1==3 && player2==1) return "player2 won";
//     if(player1==3 && player2==2) return "player1 won";
//     if(player1 === player2) return "draw play again";
//     return "invailed input";
// }

// function into arrow function 

// let multipl = ( a,b)=>{
//     return a*b;
// }

// function score(...val){
//     let total = 0;
//     score.forEach(element => {
//         total = total + element;
//     });
//     return total;
// }

// console.log(score(15,47,65,24,35,25,85,41,74,56));

// console.log(this);


// function abdc(){
//     console.log(this);
// }

// // method ke ander
// let obj = {
//     name: "shalini",
//     age : 20,
//     surname: function(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// }
// obj.surname();

// // event handler

// document.querySelector("h1").addEventListener("click",function(){
//     console.log(this.style.color = "red");
// });


// call function--->

let obj2 = {
    name2 : "manisha",
    age : 24
}

function abcd(a,b,c,d){
    console.log(this,a,b,c,d);
}

abcd(obj2,1,2,3,6);




function CreatePancil(name, parice,color){
    this.name = name;
    this.price = parice;
    this.color = color;
    this.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    };
}
CreatePancil.prototype.company = "natraj";

let pencil1 = new CreatePancil("natraj", 10, "red");
let pencil2 = new CreatePancil("natraj", 15, "blue");
let pencil3 = new CreatePancil("natraj", 20, "green");

pencil1.write("hello main pencil1 hu");
pencil2.write("hello main pencil2 hu");
pencil3.write("hello main pencil3 hu");