"use strict";

const navigation = document.querySelector(".nav-links");

const hover = function(e, opacity) {
    const link = e.target;
    const siblings = link.closest(".nav-links").querySelectorAll(".nav-link");
    siblings.forEach(element => {
        if (element !== link) {
            element.style.opacity = opacity;
            element.style.transition = "all 0.3s ease";
        }
    });
};

navigation.addEventListener("mouseover", function(e) {
    hover(e, 0.5);
});

navigation.addEventListener("mouseout", function(e) {
    hover(e, 1);
});

