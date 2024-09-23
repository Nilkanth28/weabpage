document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButton = document.querySelector('.hero button');
    learnMoreButton.addEventListener('click', () => {
        console.log('Learn More button clicked!');
    });

    alert('Welcome to EngTuwa!');

    // Toggle navigation menu on button click
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu-active');
    });

    // Slideshow functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll('.slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 2000);
    }
});




// this is used for 2 sec slide show






// document.addEventListener('DOMContentLoaded', function () {
//     const counters = document.querySelectorAll('.count');
//     counters.forEach(counter => {
//         const updateCount = () => {
//             const target = +counter.getAttribute('data-count');
//             const count = +counter.innerText;
//             const increment = target / 200; // Adjust the speed

//             if (count < target) {
//                 counter.innerText = Math.ceil(count + increment);
//                 setTimeout(updateCount, 1);
//             } else {
//                 counter.innerText = target.toLocaleString();
//             }
//         };

//         updateCount();
//     });
// });
