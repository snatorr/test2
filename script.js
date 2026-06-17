const pictures = document.querySelectorAll('.galery__item img');
const lightbox = document.getElementById('lightbox');
const bigPicture = document.getElementById('big-img');
const closeButton = document.querySelector('.close');

pictures.forEach(picture => {
    picture.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        bigPicture.src = picture.src;
    });
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== bigPicture) {
        lightbox.style.display = 'none';
    }
});