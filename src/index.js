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

window.addEventListener('load', loadMenu);
window.addEventListener('load', loadHomePage);
homeButton.addEventListener('click', loadMenu);
homeButton.addEventListener('click', loadHomePage);
menuButton.addEventListener('click', loadMenu);
menuButton.addEventListener('click', menu);
contactButton.addEventListener('click', loadMenu);
contactButton.addEventListener('click', contactPage);
