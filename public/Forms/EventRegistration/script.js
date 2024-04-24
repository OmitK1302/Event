const inputFirstName = document.querySelector(".label--fname");
const inputLastName = document.querySelector(".label--lname");
const inputMobile = document.querySelector(".input--mobile");
let inputGender = document.querySelector('input[name = "Gender"]:checked');
const options = document.querySelectorAll('.Option');
const genderOptions = document.querySelectorAll('.genOpt');
const termsCondModal = document.querySelector('.termsCond');
const termsCondtext = document.querySelector('.tAndCmodal');
const closeTermsCondModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

console.log(termsCondModal.classList);
// termsCondModal.classList.add('hidden');

function toggleHidden(){
    termsCondModal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

closeTermsCondModal.addEventListener('click',toggleHidden);
termsCondtext.addEventListener('click', toggleHidden);

