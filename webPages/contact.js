document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Display the form data in a message
            document.getElementById('form-message').innerText = 
                `Thank you, ${name}! We have received your message: "${message}". We'll contact you at ${email}.`;

            // Clear the form
            form.reset();
        });
    }
});

 // Toggle navigation menu on button click
 const navToggle = document.querySelector('.nav-toggle');
 const navMenu = document.querySelector('nav');

 navToggle.addEventListener('click', () => {
     navMenu.classList.toggle('nav-menu-active');
 });
