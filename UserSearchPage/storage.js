let users = [
  {
    name: "Tanjiro Kamado",
    pic: "https://i.pinimg.com/736x/89/7c/5c/897c5c0a92cff89a3bf1871d5a5e6675.jpg",
    bio: "silent chaos in a loud world 🖤 | not for everyone."
  },
  {
    name: "Sukuna jujutsu",
    pic: "https://i.pinimg.com/736x/d8/92/95/d8929536feb879675921ecfa39f00c95.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨"
  },
  {
    name: "gojo jujutsu kaisen",
    pic: "https://i.pinimg.com/736x/57/d2/53/57d2533c5dd462598d0cbb41bdb8c9b2.jpg",
    bio: "dream big, stay humble 🚀 | coding my future 💻"
  },
  {
    name: "Uji itadori",
    pic: "https://i.pinimg.com/736x/0b/4c/f5/0b4cf54007f12d047783c0e8af254d23.jpg",
    bio: "lost in music 🎧 | found in vibes ✨"
  },
  {
    name: "Zinitsu",
    pic: "https://i.pinimg.com/736x/6d/48/9b/6d489bd3d0981cb7c1a6a22c29f3b900.jpg",
    bio: "hustle mode ON 🔥 | no excuses 💯"
  },
  {
    name: "Inosuke",
    pic: "https://i.pinimg.com/736x/3a/8b/a0/3a8ba02e46cdb80f0a541af5dee6e449.jpg",
    bio: "creating my own sunshine 🌼 | soft but strong 💛"
  },
  {
    name: "Nezuka kamado",
    pic: "https://i.pinimg.com/736x/ba/c1/b3/bac1b3d41b7033e88a22beb35d95d10a.jpg",
    bio: "fitness + focus 💪 | discipline = freedom 🧠"
  },
  {
    name: "Mozan kibutsuji",
    pic: "https://i.pinimg.com/736x/74/33/bb/7433bbef14c2bbb82bdb342ba9ca9a31.jpg",
    bio: "i am a villen how love penting 🎨 | living in colors 🌈"
  }
];




// let input = document.querySelector(".search");
// let cards = document.querySelector(".cards");

// function showUsers(arr){
        // cards.innerHTML = "";

//     arr.forEach(function(users){

//         const input = document.createElement("input");
//         input.classList.add("search");
//         input.type = "text";
//         input.placeholder = "search...";

//         const card = document.createElement("div");
//         card.classList.add("card");

//         const img = document.createElement("img");
//         img.src = users.pic;
//         img.classList.add("bg-img");


//         const blurredLayer = document.createElement("div");
//         blurredLayer.style.backgroundImage = `url(${users.pic})`;
//         blurredLayer.classList.add("blurred-layer");

//         const content = document.createElement("div");
//         content.classList.add("content");

//         const heading = document.createElement("h3");
//         heading.textContent = users.name;

//         const para = document.createElement("p");
//         para.textContent = users.bio;

//         content.appendChild(heading);
//         content.appendChild(para);

//         card.appendChild(img);
//         card.appendChild(blurredLayer);
//         card.appendChild(content);

//         // document.body.appendChild(container);
//     });
//     cards.appendChild(card);
// };

// show only first 3 initially
// showUsers(users.slice(0, 3));

// input.addEventListener("input", function () {
//     let value = input.value.toLowerCase().trim();

//     // if search box is empty → show first 3 again
//     if (value === "") {
//         showUsers(users.slice(0, 3));
//         return;
//     }

// });

// showUsers(users);

// input.addEventListener("input",function(){
//     let newUser = users.filter((user)=>{
//         return user.name.startsWith(input.value);
//     });

//     showUsers(newUser);
// }); 

// optimal code-->
let cards = document.querySelector(".cards");
let input = document.querySelector(".search");

// render function
function showUsers(arr) {
    cards.innerHTML = ""; 

    let fragment = document.createDocumentFragment(); // performance boost

    arr.forEach(user => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${user.pic}" class="bg-img">
            <div class="blurred-layer" style="background-image:url(${user.pic})"></div>
            <div class="content">
                <h3>${user.name}</h3>
                <p>${user.bio}</p>
            </div>
        `;

        fragment.appendChild(card);
    });

    cards.appendChild(fragment);
}

// 🔹 initial load → only first 3
showUsers(users.slice(0, 3));

// 🔹 search
input.addEventListener("input", () => {
    let value = input.value.toLowerCase().trim();

    if (value === "") {
        showUsers(users.slice(0, 3));
        return;
    }

    let newUser = users.filter(user =>
        user.name.toLowerCase().includes(value)
    );

    showUsers(newUser);
    if(newUser==0){
      let msg = document.createElement("p");
        msg.textContent = "No user found";
        msg.style.color = "#888";
        msg.style.fontSize = "18px";

        cards.appendChild(msg)
        return
    }
});

