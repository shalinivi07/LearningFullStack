let formContainer = document.querySelector(".form-container");

const usersManager = {
    users: [],
    init: function () {
        formContainer.addEventListener('submit', this.submitForm.bind(this));
    },
    submitForm: function (e) {
        e.preventDefault();
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });
    },
    addUser: function () {},
    removeUser: function () {},
}

usersManager.init();