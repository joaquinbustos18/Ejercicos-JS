let loginForm = document.querySelector(".aside__login");
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#pass");
let asideData = document.querySelector(".aside__data");
let loginName = document.querySelector(".data__name");
let btnLogout = document.querySelector(".data__logout");

let getUser = () => {
  let myUser = localStorage.getItem("user");

  if (myUser) {
    let identity = JSON.parse(myUser);
    loginName.innerHTML = identity.name;
    loginForm.classList.add("aside__login--hide");
    asideData.classList.remove("aside__data--hide");
  }
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //recoger los valores

  let name = inputName.value;
  let email = inputEmail.value;
  let password = inputPassword.value;

  //comprobar que no esten vacios
  let user = {};
  if (name && email && password) {
  }

  //guardar datos en un objetos

  user = { name, email, password };

  //guardar en el localStorage

  localStorage.setItem("user", JSON.stringify(user));

  //vaciar el formulario

  loginForm.reset();

  //mostrar el usuario

  getUser();
});

//mostrar el usuario

getUser();

// cerrar sesion

btnLogout.addEventListener("click", () => {
  localStorage.clear();
  loginForm.classList.remove("aside__login--hide");
  asideData.classList.add("aside__data--hide");
});
