const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
let autoSlideInterval;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) img.classList.add('active');
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextImage, 3000); // 3000 ms = 3 segundos
}




showImage(currentIndex);
startAutoSlide();
