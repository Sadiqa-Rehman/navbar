const mobile = document.querySelector(".mobile");
const navMenu = document.querySelector(".nav-menu");

mobile.addEventListener("click", mobileMenu);

function mobileMenu() {
    mobile.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// //////////////////// form start  // ///////////////////
function Signup() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// function Signin() {
//   document.getElementById("enter").style.display = "block";
// }

//  for signup form
// function close() {
//   document.getElementById("enter").style.display = "none";
// }
// function myform() {
//   document.getElementById("myForm").style.display = "block";
// }