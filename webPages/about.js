    // document.querySelectorAll('nav ul li a').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();

    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });

    document.getElementById('toggle-theme').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelectorAll('.about-item').forEach(item => item.classList.toggle('dark-mode'));
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.toggle('dark-mode'));
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 1
    });

    document.querySelectorAll('.about-item h2').forEach(h2 => {
        observer.observe(h2);
    });

    document.getElementById('year').textContent = new Date().getFullYear();

     // Toggle navigation menu on button click
     const navToggle = document.querySelector('.nav-toggle');
     const navMenu = document.querySelector('nav');
 
     navToggle.addEventListener('click', () => {
         navMenu.classList.toggle('nav-menu-active');
     });

