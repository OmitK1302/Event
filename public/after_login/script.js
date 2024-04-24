const dropbtn = document.querySelector(".dropbtn");
const dropbtnUp = document.querySelector(".bxs-chevron-up");
const dropbtnDown = document.querySelector(".bxs-chevron-down");
const dropDownContent = document.querySelector(".dropdown-content");

const allButtons = document.querySelectorAll(".dropbtn_icons");
allButtons.forEach(button => {
    button.style.display = "none";
});

dropbtnDown.style.display = "block";
dropDownContent.style.display = "none";

dropbtn.addEventListener("click", function() {
    if (dropDownContent.style.display === "none") {
        dropDownContent.style.display = "block";
        dropbtnDown.style.display = "none";
        dropbtnUp.style.display = "block";
    } else {
        dropDownContent.style.display = "none";
        dropbtnDown.style.display = "block";
        dropbtnUp.style.display = "none";
    }
});