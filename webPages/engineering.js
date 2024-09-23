let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex < 1) { slideIndex = slides.length; }
    if (slideIndex > slides.length) { slideIndex = 1; }
    showSlides();
}



  // Toggle navigation menu on button click
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav');

  navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('nav-menu-active');
  });
