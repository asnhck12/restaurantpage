function menu() {
    const contentBody = document.getElementById('content');
    const title = document.createElement('h2');
    title.setAttribute('id','menu');
    title.innerHTML = "Menu";

    const menu = document.createElement('p');
    menu.setAttribute('id','menu');
    menu.innerHTML = 
    "<b>Starter</b> <br> Bread <br> Soup <br><br> <b>Main</b> <br> Steak <br> Filet Mignon <br><br> <b>Drinks</b> <br> Water";

    contentBody.appendChild(title);
    contentBody.appendChild(menu);

    };

export { menu };
