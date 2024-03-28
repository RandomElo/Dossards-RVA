document.addEventListener("DOMContentLoaded", () => {
    const utilisationDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
    const favicon = document.querySelector('link[rel="icon"]');
    const iconeHamburger = document.querySelector('#imageHamburger')

    if (utilisationDark) {
        favicon.href = "/public/img/favicon-light.ico";
    } else {
        favicon.href = "/public/img/favicon-dark.ico";
    }
});

//Gestion de la navbar 
//Récupération du menu hamburger
const menuHamburger = document.querySelector(".menuHamburger")
//Récupération du navlink
const navLinks = document.querySelector(".navLinks")
//Ajout de l'événment click sur l'image du menu hamburger
menuHamburger.addEventListener('click',()=>{
	navLinks.classList.toggle('mobile-menu')
}) 