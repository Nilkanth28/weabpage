const images = [
    'url("https://content3.jdmagicbox.com/comp/godhra/l6/9999p2672.2672.130905120035.z6l6/catalogue/engineering-college-tuwa-godhra-godhra-computer-engineering-colleges-55wx8oapkt.jpg")',
    'url("https://engtuwa.org/wp-content/uploads/2022/07/front-view.jpg")',
    'url("https://content3.jdmagicbox.com/comp/godhra/l6/9999p2672.2672.130905120035.z6l6/catalogue/engineering-college-tuwa-godhra-godhra-computer-engineering-colleges-55wx8oapkt.jpg")'
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    document.body.style.backgroundImage = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

function toggleDetails(element) {
    const description = element.querySelector('.description');
    const isVisible = description.style.display === 'block';
    description.style.display = isVisible ? 'none' : 'block';
}

setInterval(changeBackgroundImage, 3000); // Change every 3 seconds

window.onload = changeBackgroundImage;

 // Toggle navigation menu on button click
 const navToggle = document.querySelector('.nav-toggle');
 const navMenu = document.querySelector('nav');

 navToggle.addEventListener('click', () => {
     navMenu.classList.toggle('nav-menu-active');
 });