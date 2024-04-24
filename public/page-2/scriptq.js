const options = document.querySelector(".options");
const option = document.querySelectorAll(".option");
const option1 = document.querySelector(".student__option");
const option2 = document.querySelector(".organization__option");
const student = document.querySelector(".img__student");
const organization = document.querySelector(".img__organization");
const select = document.querySelector(".img__select");
const conti = document.querySelector("#click");
const submit = document.querySelector(".buttons a");
const back = document.querySelector('.bx-arrow-back');

options.addEventListener("click", function(e) {
    const clicked = e.target.closest(".option");

    if (!clicked) return;
    select.style.opacity = 0;
    student.style.opacity = 0;
    organization.style.opacity = 0;
    option1.classList.remove("option-active");
    option2.classList.remove("option-active");

    if (clicked.classList.contains("student__option")) {
        student.style.opacity = 0.9;
        option1.classList.toggle("option-active");
        submit.setAttribute("href", "/sign-up-Student");
    }
    else if (clicked.classList.contains("organization__option")) {
        organization.style.opacity = 0.9;
        option2.classList.toggle("option-active");
        submit.setAttribute("href", "/sign-up-Organization");
    }
});

conti.addEventListener('click', signUpLoader);

option1.addEventListener('click', function () {
    
})

function signUpLoader(){

}


