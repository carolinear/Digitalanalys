document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('contact-popup').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('contact-popup').style.display = 'none';
});

// Stänger popupen om användaren klickar utanför den
window.addEventListener('click', function(event) {
    const popup = document.getElementById('contact-popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Här kan du lägga till kod för att skicka formuläret till en server eller API
    console.log(`Namn: ${name}`);
    console.log(`E-post: ${email}`);
    console.log(`Meddelande: ${message}`);

    // Visar ett bekräftelsemeddelande
    document.getElementById('response-message').textContent = 'Tack för ditt meddelande! Vi hör av oss snart.';

    // Tömmer formuläret efter inskickat meddelande
    document.getElementById('contact-form').reset();

    // Stänger popupen efter att formuläret skickats
    document.getElementById('contact-popup').style.display = 'none';
});

// Lägger till funktion för att förstora bilden när den klickas
document.getElementById('room-image').addEventListener('click', function() {
    const imageUrl = this.src;
    const imageWindow = window.open("", "Image", "width=800,height=600");
    imageWindow.document.write(`<img src="${imageUrl}" style="width:100%;height:auto;">`);
});
