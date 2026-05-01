In javaScript there are some truthy and falsy values and those words are -
0, NaN(not a number), Undefined, ""(double quats), false, document.all --> all are falsy in nature
we can check the ture nature of the given values by using (!! before the value).
and the remaining all are truthy in nature

pridict the result:
true + false = 1(1+0)
null + 1 = 1(0+1)
5 + "5" = 55(+ perform concatination here)
!!undefined = false

why NaN's type is number?
-b/c NaN is a failed number opration that induse form the numeric opration like 
--- 2 * shalini = NaN(computer thinks that the opration gonna perform is mathematical so it gives the type of NaN is number)

undefined vs null
undefined is the default value of any variable that has been declared.
like- let user; // it's type is undefined

null is that value we assined to any variable like we are saying lets make a variable user and for now it is assined as null saying that there in no user here for now.
like- let user = null;



# Functions
rest padha ...any name. and spread bhi hota hai jo array aur objects me use hota hai 

## first class function-
is function ko ham as a value use kar sakte hai
ex:-
  function abcd(val){
    val();
  }

  abcd(function(){
    consol.log("hey");
  }) 

## high order function ->
  that funcrion who accept function in the parameter and return any function 
  ```
  function abc(val){
    return function(){

    }
  }
```
  OR
 ``` 
  function abc(val){

  };

  abc(function(){

  });
```
## pure function -->
those function that use only internl atributs not external
```
let total = 0;
function(num){
  let newtotal = total;
  newtotal = newtotal + num;
}
```
## impure function -->
those funtion  are impure  that use  or modify external variable

ex:- 
```
 let total = 0;
 function(num){
          total = total + num;
}
```

## clouser -->
  ek aisa function jo return kare ek function and returing function me perent function ek kisi vairiable ka use kiya ho

## lexical scoping -->
  function ke under function and then use function ke under function and very variable that is created with in the funtion their scop of using those variable with in the function only

## IIFE(imidiatly invoce  function exprestion )
 ```
  (function(){
      consol.log("heeyehey");
  })();
```
## Hoisting -->
  kisi bhi chij ko bnane se pahle use kar lena that is hoisting
  but we can use hoisting in function stetment and declration, but we can not use it in exprestion 

## BMI calculater
```
function bmi(weight, hight){
   return weight / (hight*hight);
}

console.log(bmi(64, 4.11).toFix(2));
```
### DiscountCalculater
```
function dicCal(discunt){
  return function(price){
      return price - price * (discunt / 100);
  }
}
 let discunter = dicCal(10)
 console.log(discunter(200)); //180
```

## Array -->
 methods that is used in arrays - pop, push, 
 shift - remove the values form the starting of array,
 unshift - add values in the first 
 splice - change the actual element
 slice - do not change the actual element it modify
 reverse -  it reverse the actual array
 sort - it sort the array , sort accept function only and that function wants tow parameters

** map function tab use karna hai jab apko new arra banana hai 
foreach, filter, reduse
```
let arr = [15,62,3,4,25,85,47];

let ans = arr.reduce(function(acumulater,val){
    return acumulater + val;
},0);
console.log(ans); //241
```
### find
```
let arr = [
  {id :1, key:4},
  {id :2, key:5},
  {id :3, key:4},
];

let ans = arr.find(function(val){
    return val === 4;
},0);
console.log(ans); //{id: 1, key: 4}
```

## distructuring of array
```
let [a,b,,c] = arr;
```

## Objects
 for nested object , when we want to copy this we can but the inner object pass thier refrence on the copy that why we use JSON.stringify(obj) --> ye pure object ko string bana deta hai 
 JSON.parse(obj) --> ye us string ko wapas se objectify kar deta hai 

 so, to copy the nested object we use -->
 ``` let obj2 = JSON.parse(JSON.stringify(obj));
 ```
 now the obj2 has the copy of obj not refrence 
 

# Part2

## DOM- document object modification

## Event Handling
