// new card create karne hai aru data local sorage me save karane hai 
// local storage se hi cards ko show karana hai 
// buttonns ko handle karana hia 
// filters ko handle karna hai

let addNote = document.querySelector("#add-note");
let form = document.querySelector(".form-container");
let cardContainer = document.querySelector(".card-container");
let closeForm = document.querySelector(".closeform");

addNote.addEventListener("click",function(){
    cardContainer.style.display = "none";
    form.style.display = "initial";
});

closeForm.addEventListener("click",function(){
    form.style.display = "none";
    // cardContainer.style.display = "initial";
});

// added event listners to the js file 

const imageUrl = document.querySelector('input[placeholder="http//example.jpg"]');
const fullName = document.querySelector('input[placeholder=" Enter Name"]');
const homeTown = document.querySelector('input[placeholder="Enter your Home Town"]');
const purpose = document.querySelector('input[placeholder="eg:- Quick appoinment role"]');
const categoryRadios = document.querySelectorAll('input[name="category"]');

// Category radio buttons
const emergency = document.querySelector('input[value="Emergency"]');
const important = document.querySelector('input[value="Importent"]');
const urgent = document.querySelector('input[value="Urgent"]');
const noRush = document.querySelector('input[value="no rush"]');

let category = null;
function makeValidation(){
    if(category === null){
        
    }
    )
     // Check Image URL
    if (imageUrl.value.trim() === "") {
        // alert("Please enter an Image URL");
        // imageUrl.focus();
        return false;
    }

    // Simple image URL validation
    // const imagePattern = /\.(jpg|jpeg|png|gif|webp)$/i;
    // if (!imagePattern.test(imageUrl.value.trim())) {
    //     alert("Please enter a valid image URL");
    //     imageUrl.focus();
    //     return false;
    // }

    // Check Full Name
    if (fullName.value.trim() === "") {
        // alert("Please enter your Full Name");
        // fullName.focus();
        return false;
    }

    // Check Home Town
    if (homeTown.value.trim() === "") {
        // alert("Please enter your Home Town");
        // homeTown.focus();
        return false;
    }

    // Check Purpose
    if (purpose.value.trim() === "") {
        // alert("Please enter the Purpose");
        // purpose.focus();
        return false;
    }

    // Check Category
    if (!category) {
        alert("Please select a Category");
        return false;
    }

    return true;
}

form.addEventListener("submit", function(e){
    e.priventDefault();
    makeValidation();

})