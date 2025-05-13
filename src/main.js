import './style.scss';

// gradient background animation
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    if (!interBubble) return;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 5;
        curY += (tgY - curY) / 5;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

// social link buttons
const githubLink = document.getElementById('github-button');
const linkedinLink = document.getElementById('linkedin-button');
const emailLink = document.getElementById('email-button');

githubLink.addEventListener('click', () => {
    window.location.href = 'https://github.com/Ephernicus';
});

linkedinLink.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/mjiu/';
});

emailLink.addEventListener('click', () => {
    window.location.href = 'mailto:jiumaggie@gmail.com';
});


// gallery section functionality
// 1. grab every image file (case‐insensitive extensions)
const modules = import.meta.glob(
    '/src/assets/gallery/*.{jpg,JPG,png,PNG,jpeg,JPEG,gif,GIF,heic,HEIC}',
    { eager: true }
  );
  
  // 2. extract the URLs
  const urls = Object.values(modules).map(m => m.default);
  
  // 3. render them
  const gallery = document.querySelector('.gallery');
  urls.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
  });