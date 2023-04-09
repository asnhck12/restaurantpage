function loadHomePage() {
    const contentBody = document.getElementById('content');
    const title = document.createElement('h2');
    title.setAttribute('id','title');
    title.innerHTML = "My Restaurant";

    const mainImage = document.createElement('img');
    mainImage.setAttribute('id','mainImage');
    mainImage.src = "../assets/Restaurant small.jpg";

    const about = document.createElement('p');
    about.setAttribute('id','about');
    about.innerHTML = "Welcome to our restaurant, a place with a warm atmosphere and a wide variety of delicious food and drink.";

    contentBody.appendChild(title);
    contentBody.appendChild(mainImage);
    contentBody.appendChild(about);

    };

export { loadHomePage };
