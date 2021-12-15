
const form = document.querySelectorAll("#for");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-links");
const body = document.querySelector("body");
const html = document.querySelector("html");

document.getElementById("submit").addEventListener('submit' , (e) =>{
    e.preventDefault();
    
})
form.forEach((e) =>{
    e.reset();
})
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("lock-scroll");
    html.classList.toggle("lock-scroll");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
function getFile() {
    document.getElementById("upfile").click();
  }
function sub(obj) {
    var file = obj.value;
    var fileName = file.split("\\");
    document.getElementById("yourBtn").innerHTML = fileName[fileName.length - 1];
    document.myForm.submit();
    event.preventDefault();
}

