let marks = {
    shalini:89,
    vipul:67,
    manisha:90,
    tanvi:78,
}

// problem 1
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("the marks of " +Object.keys(marks)[i] +" is "+marks[Object.keys(marks)[i]]) 
}

//problem 2
for(let key in marks){
    console.log("The marks of " +key +" is "+marks[key])
}

//probelm 3

let cn = 67
let i

while(i != cn){
    console.log("try again..")
    i = prompt("enter your no:")
    i++
}

console.log("you have entered the currec no.")