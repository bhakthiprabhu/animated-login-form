let singUp = document.getElementById("signUp");
let login = document.getElementById("login");
let cng = document.getElementsByClassName("content")[0];
console.log(singUp);
console.log(login);
console.log(cng);
singUp.addEventListener("click", () => {
    cng.style.transform = 'rotateY(180deg)';
})
login.addEventListener("click", () => {
    cng.style.transform = 'rotateY(0deg)';
})
