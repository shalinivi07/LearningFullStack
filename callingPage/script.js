// new card create karne hai aru data local sorage me save karane hai 
// local storage se hi cards ko show karana hai 
// buttonns ko handle karana hia 
// filters ko handle karna hai

let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],

  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },

  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },

  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    // form.style.display = "none";
    form.reset();
    this.renderUi();
  },

  renderUi: function () {
    const usersContainer = document.querySelector(".users");
    usersContainer.innerHTML = "";

    this.users.forEach(function (user) {

      const card = document.createElement("div");
      card.classList.add("user-card");

      card.innerHTML = `
        <img src="${user.photo}" alt="User Photo">
        <h2>${user.username}</h2>
        <p class="role">${user.role}</p>
        <p class="bio">${user.bio}</p>
      `;

      usersContainer.appendChild(card);
    });
  },

  removeUser: function () {}
};

userManager.init();