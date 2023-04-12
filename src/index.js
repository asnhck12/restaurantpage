import { loadHomePage } from './Modules/home-page';
import { menu } from './Modules/menu';
import { contactPage } from './Modules/contact-page';

const contentBody = document.getElementById('content');
const tabSection = document.createElement('div');
const homeButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');

function loadMenu() {
    clearPage();
    tabSection.setAttribute('id','menuHeader');
    homeButton.innerHTML = "Home";
    menuButton.innerHTML = "Menu";
    contactButton.innerHTML = "Contact Us";

    tabSection.setAttribute('id','tabSection');

    contentBody.appendChild(tabSection);
    tabSection.appendChild(homeButton);
    tabSection.appendChild(menuButton);
    tabSection.appendChild(contactButton);
}

function clearPage() {
    contentBody.innerHTML = '';
}

window.addEventListener('load', () => {
    loadMenu();
    loadHomePage();
    homeButton.style.background = "Azure";
    menuButton.style.background = "transparent";
    contactButton.style.background = "transparent";
});

homeButton.addEventListener('click', () => {
    loadMenu();
    loadHomePage();
    homeButton.style.background = "Azure";
    menuButton.style.background = "transparent";
    contactButton.style.background = "transparent";
});

menuButton.addEventListener('click', () => {
    loadMenu();
    menu();
    homeButton.style.background = "transparent";
    menuButton.style.background = "Azure";
    contactButton.style.background = "transparent";
});

contactButton.addEventListener('click', () => {
    loadMenu();
    contactPage();
    homeButton.style.background = "transparent";
    menuButton.style.background = "transparent";
    contactButton.style.background = "Azure";
});

