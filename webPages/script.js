// JavaScript to toggle mobile menu (if applicable) or other interactions

document.addEventListener('DOMContentLoaded', () => {
    // Example: Log a message when the "Learn More" button is clicked
    const learnMoreButton = document.querySelector('.hero button');
    learnMoreButton.addEventListener('click', () => {
        console.log('Learn More button clicked!');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Display a welcome message
    alert('Welcome to EngTuwa!');

    // Toggle the navigation menu
    const toggleButton = document.getElementById('toggle-menu');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const menu = document.querySelector('nav ul');
            menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
        });
    }

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
