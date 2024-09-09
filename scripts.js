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
});
