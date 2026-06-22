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