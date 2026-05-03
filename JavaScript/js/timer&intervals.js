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