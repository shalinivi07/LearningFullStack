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

  ```js
  function abcd(val){
    val();
  }

  abcd(function(){
    consol.log("hey");
  })
  ``` 

## high order function ->
  that funcrion who accept function in the parameter and return any function 
  ```js
  function abc(val){
    return function(){

    }
  }
```
  OR
 ```js 
  function abc(val){

  };

  abc(function(){

  });
```
## pure function -->
those function that use only internl atributs not external
```js
let total = 0;
function(num){
  let newtotal = total;
  newtotal = newtotal + num;
}
```
## impure function -->
those funtion  are impure  that use  or modify external variable

ex:- 
```js
 let total = 0;
 function(num){
          total = total + num;
}
```

## clouser -->
  ek aisa function jo return kare ek function and returing function me perent function ek kisi vairiable ka use kiya ho.

  fayeda - ham ise use karte hai global pollution ho handle karane ke liye - environment ka pollution nahi code ke ander jitane bhi variables hote hai vo achhe se use karane me aur hanlde karane me.

```js
function abcd(){
  let a = 20;
  return function(){
    console.log(a);
  }
}
```

## lexical scoping -->
  function ke under function and then use function ke under function and very variable that is created with in the funtion their scop of using those variable with in the function only

## IIFE(imidiatly invoce  function exprestion )
 ```js
  (function(){
      consol.log("heeyehey");
  })();
```
## Hoisting -->
  kisi bhi chij ko bnane se pahle use kar lena that is hoisting
  but we can use hoisting in function stetment and declration, but we can not use it in exprestion 

## BMI calculater
```js
function bmi(weight, hight){
   return weight / (hight*hight);
}

console.log(bmi(64, 4.11).toFix(2));
```
### DiscountCalculater
```js
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
```js
let arr = [15,62,3,4,25,85,47];

let ans = arr.reduce(function(acumulater,val){
    return acumulater + val;
},0);
console.log(ans); //241
```
### find
```js
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
```js
let [a,b,,c] = arr;
```

## Objects
 for nested object , when we want to copy this we can but the inner object pass thier refrence on the copy that why we use JSON.stringify(obj) --> ye pure object ko string bana deta hai 
 JSON.parse(obj) --> ye us string ko wapas se objectify kar deta hai 

 so, to copy the nested object we use -->
 ```js
  let obj2 = JSON.parse(JSON.stringify(obj));
 ```
 now the obj2 has the copy of obj not refrence 
 

# Part2

## DOM- document object modification

jo kuchh bhi screen pe ya web page pe changes ya action hote hai vo dom manipulation kahlate hai 

## Event Handling
- queryselector()
- queryselectorall()
- createElement()
- createAtribute()
- appand()
- appandChild()
- setAtribute()
- getAtribute()
- remove()

### atributes
 - classList.add()

#### event
 - addeventlestner("listner", function)#
#### listners-

 - click
 - dblclick
 - input
 - key
 - move
 - mouseover
 - mouseout
 - mousemove

# Bubbling--->
ager aap event reise akr rahe to- ager child pe event nahi laga hai aur parent per hai to ager app chiled pe event reise karenge to parent ka event reise ho jayega 

ex-

```html
    <ul>
        <li>apple</li>
        <li>banana</li>
        <li>grepse</li>
        <li>mengo</li>
        <li>papaya</li>
    </ul>
```
```js
let ul = document.querySelector("ul");

ul.addEventListener("click", function(dats){
    dats.target.classList.toggle("lt")
})
```
isme ul parent hai jisper event hai lekin ham chaild ke through event reise kar rahe hai 

## event 
ye `bubbling` ka ulta hota hai 
`capturing`  capturingdo phases me work karta hai -

- phase 1: pahale parent ka event resie hota hai then chaild ka.
- phase 2: bubbling 

```js
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){    // a clicked ,c clicked , btn clicked, b clikced
    console.log("btn clicked");
});

a.addEventListener("click",
    function(){
        console.log("a clicked");
    },true
);

b.addEventListener("click",function(){
    console.log("b clicked");
});

c.addEventListener("click",
    function(){
        console.log("c clicked");
    },true
);
```
# Timers and Intervals

- settimeout(function,ms);
- setInterval(function,ms); -- loop ke tarah work karta hai 
- clearinterval
- cleartimeout
```js
let count = 0;
let seconds = 3;

let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percent-text");

let interval = setInterval(function(){
    if(count <= 99){
        count++;
        progress.style.width = `${count}%`; 
        percentText.textContent = `${count}%`;             
    }else{
        document.querySelector("h2").textContent = "Downloaded.";
        clearInterval(interval);
    }
}, 3000/100);

// let container = document.querySelector(".grass-card");

// setTimeout(function(){
//     container.style.display = "none";
// } , 3000);
```

# sessionstorage, localstorage & cookies -
- localstorage:- ye browser ke sotrage ko use karta hai aur ager tab ya braowser band bhi ho jaye to data delete anhi hoga.
- sessiondtorage:- ye bhi browser storage use karta hai lekin temrary ha iager tab band kiya to data khatam.
- cookies:- ye browser ke cookeis me stoge hota hai aur light data ke liye use hota hai.

* localstorage-->

store kaise kare - setItem
data fatch kaise kare- getItem
update kaise kare - setItem
remove kaise kare - removeItem

localstorage me ham object , array ye sab store nahi kar sakte ham only string hi store karte hai isme lekin -  aisa kuchh nahi hai jo ham nahi kar sakte to array ay object sotre karna hai to ham use karenge JSON.strigify  ye kisi bhi type ko string me convert kar deta hai 

aur ager data fatch karte wakt hame apni actual value chahiye to json.parse use kar lete hai ye string ko convart kar deta hai vo jis bhi type ki value save kiya tha string me convert kar ke


## calling app

in js only:- we want when the + button get clicked teh form will open so select that button
and add event listnter to it.
and when we click on the close button the form shloud disappiar


# scope in js-
1. globle scope -- ager apka code kisi bhi type ke {},[],();
me nahi hai to aapka code globle scoped hai use ham kahi bhi use kar sakte hai 

2. functional scope-- ager apka code kisi function ke ander likha hai to uska scope functional hai matlab use sirf function ke ander use kar sakte hai bahr nahi use kar sakte

3. breses scope-- ager apka code bresses ke ander likha hai to uska cope sirf use {} ke ander hi hoga aap use {} ke bahr nahi use kar sake .

# exicution content-
jab bhi js koi function run karta hai to sabse pahle exicution context banata hai , ye ek prossec hai jo ki do phases me chalata hai. 1 memory phase and 2 exicution phase.


# lexical scoping -->
 aap kin chijo ko assse kar sakte ho usake basis pe pata chalta hai ki aapki lexical scoping kitnai hai matlab aak jaha physically present ho oo pura scop hi lexical scop hota hai.

 #####  javascript lexically scoped hoti hai 

# dynamicaly  scoping -->
kaha se call kar rahe ho uspe depend karegi ki kay value milegi.
```js

let a = 12;

function abcd(){
  console.log(a);
}

function cde(){
  let a = 30;
  abcd();                    // ans:-12 js lexically scop hai is liye 12 print ho raha hai
}                            // vahi jab dynamially scoped hota to 30 print hota
cde();

```
## clousers -->

ye sach hai jab bhi koi function run hota hai to vo funciton aur uske variable khatam ho jate hai .
aise * variable priserved * hote hai
javascript ke funciton me jab bhi ye abcd funciton run karata hai usake baad ye function khatam ho jata hai but jab bhi clouser bnate hai to apke function aur uske variables ka back link banta hai  aur uska namm hota hai [[environment]]

```js
function abcd(){
  let a = 20;
  return function(){
    console.log(a);
  }
}
```

#### private counter -->
```js
function countForMe(){
  let c = 0;
  return function(){
    c++;
    console.log(a);
  }
}
let fnc = countForMe(); it has its own c
fnc(); //1
fnc();  //2
fnc();  //3
fnc(); //4
fnc();  //5
fnc();   //6

let fnc2 = countForMe(); it has its own c 
fun2(); //1
fun2();//2
fun2();//3
fun2();//4
fun2();//5
fun2();//6
```

## encapsulation -->
```js
function countForMe(){
  let c = 0;
  return function(){
    if(c < 5)
    c++;
  console.log(`clicked: ${c} times`);
  }else{
    console.error("limit is excceded");
  }
}

let fnc = countForMe();
fnc();  // clicked: 1 time
fnc();  // clicked: 1 time
fnc();  // clicked: 1 time
fnc();  // clicked: 1 time
fnc();  // limit is excceded
// isme ager consol se hm c ki value update karane k kosis karenge to vo ek new globle variable banadega lekin c ki value update nahi hogi kyu ki vo encapsulate  ho chuka hai 
```