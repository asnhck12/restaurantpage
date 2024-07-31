function loadHomePage() {                   
    const contentBody = document.getElementById('content');
    const title = document.createElement('div');
    const titleSection = document.createElement('h2');
    title.setAttribute('id','title');
    titleSection.innerHTML = "My Restaurant";

    const mainImageSection = document.createElement('div');
    const mainImage = document.createElement('img');
    mainImageSection.setAttribute('id','mainImage');
    mainImage.src = "./assets/restaurant_small.jpg";

    const aboutSection = document.createElement('div');
    const about = document.createElement('p');
    aboutSection.setAttribute('id','about');
    about.innerHTML = "Welcome to our restaurant, a place with a warm atmosphere and delicious food and drink.";

    contentBody.appendChild(title);
    title.appendChild(titleSection);
    contentBody.appendChild(mainImageSection);
    mainImageSection.appendChild(mainImage);
    contentBody.appendChild(aboutSection);
    aboutSection.appendChild(about);

    };

export { loadHomePage };
