function menu() {
    const contentBody = document.getElementById('content');
    const title = document.createElement('h2');
    title.setAttribute('id','menu');
    title.innerHTML = "Menu";

    const menu = document.createElement('p');
    menu.setAttribute('id','menu');
    menu.innerHTML = 
    "Starter \n Bread \n Soup \n\n Main \n Steak \n Filet Mignon \n Drinks \n Water";

    contentBody.appendChild(title);
    contentBody.appendChild(menu);

    };

export { menu };
