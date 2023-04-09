function contactPage() {
    const contentBody = document.getElementById('content');
    const title = document.createElement('h2');
    title.setAttribute('id','contactPage');
    title.innerHTML = "Contact";

    const contactDetails = document.createElement('p');
    contactDetails.setAttribute('id','contactPage');
    contactDetails.innerHTML = 
    "Contact us by email (fakeemail@fakemail.com) or call us (012434 45353)";

    contentBody.appendChild(title);
    contentBody.appendChild(contactDetails);

    };

export { contactPage } ;