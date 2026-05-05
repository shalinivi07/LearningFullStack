// new card create karne hai aru data local sorage me save karane hai 
// local storage se hi cards ko show karana hai 
// buttonns ko handle karana hia 
// filters ko handle karna hai

let addNote = document.querySelector("#add-note");
let form = document.querySelector(".form-container");
let cardContainer = document.querySelector(".card-container");
let closeForm = document.querySelector(".close-form");

addNote.addEventListener("click",function(){
    form.style.display = "initial";
    cardContainer.style.display = "none";
});

closeForm.addEventListener("click",function(){
    form.style.display = "none";
    cardContainer.style.display = "initial";
});