document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevBtn = document.getElementById('prevVideo');
  const nextBtn = document.getElementById('nextVideo');

  let currentIndex = 0;

  function updateCarousel() {
    carouselItems.forEach((item, index) => {
      // Remove any existing positional classes
      item.classList.remove('center', 'left', 'right', 'hidden', 'far-left', 'far-right');
      if (index === currentIndex) {
        item.classList.add('center');
      } else if (index === currentIndex - 1) {
        item.classList.add('left');
      } else if (index === currentIndex + 1) {
        item.classList.add('right');
      } else if (index === currentIndex - 2) {
        item.classList.add('far-left');
      } else if (index === currentIndex + 2) {
        item.classList.add('far-right');
      } else {
        item.classList.add('hidden');
      }
    });
  }

  function showPrevVideo() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
  }

  function showNextVideo() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
  }

  prevBtn.addEventListener('click', showPrevVideo);
  nextBtn.addEventListener('click', showNextVideo);

  // Initialize the carousel position
  updateCarousel();
});
