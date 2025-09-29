/*
  Video carousel logic for the carousel page
  -----------------------------------------
  Uses a 3D‑style carousel adapted from the original anniversary project.
  Each item is positioned relative to the currently selected index
  (centre, left, right, far‑left, far‑right or hidden).  Clicking
  arrows shifts the carousel accordingly.  Videos in non‑centre
  positions are paused automatically to prevent multiple videos
  playing at once.
*/

(() => {
  const items = Array.from(document.querySelectorAll('.carousel-item'));
  const totalItems = items.length;
  let currentIndex = 0;

  const nextBtn = document.getElementById('nextVideo');
  const prevBtn = document.getElementById('prevVideo');

  /**
   * Update classes on each carousel item based on the current index.
   * Also pause any videos that are not the centre item.
   */
  function updateCarousel() {
    items.forEach((item, index) => {
      // Remove all positioning classes
      item.classList.remove('center', 'left', 'right', 'far-left', 'far-right', 'hidden');

      const position = (index - currentIndex + totalItems) % totalItems;

      let cls;
      if (position === 0) {
        cls = 'center';
      } else if (position === 1) {
        cls = 'right';
      } else if (position === 2) {
        cls = 'far-right';
      } else if (position === totalItems - 1) {
        cls = 'left';
      } else if (position === totalItems - 2) {
        cls = 'far-left';
      } else {
        cls = 'hidden';
      }
      item.classList.add(cls);

      // Pause videos in non‑centre positions
      const vid = item.querySelector('video');
      if (cls !== 'center') {
        vid.pause();
      }
    });
  }

  function next() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  }

  // Event listeners for arrows
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  // Clicking on side items navigates to them
  items.forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('right')) next();
      if (item.classList.contains('left')) prev();
    });
  });

  // Mouse wheel navigation
  document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
      next();
    } else {
      prev();
    }
  });

  // Touch swipe navigation
  let touchStartX;
  document.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
  });
  document.addEventListener('touchend', (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) next();
    if (touchStartX - touchEndX < -50) prev();
  });

  // Initialise
  updateCarousel();
})();
