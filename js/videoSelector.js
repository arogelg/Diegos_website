/*
  Video selector logic for the explanation page
  ------------------------------------------------
  Maintains a list of your friends and their associated videos.  When
  the left or right skeleton arrow is clicked, the displayed
  video/name is updated.  Feel free to add or remove entries from the
  `friends` array below.  The `src` paths should point to files in
  ../assets/videos/ (relative to this JS file, which runs in
  explanation.html).
*/

(() => {
  // Array of objects with a friend's name and their video file
  const friends = [
    { name: 'Friend 1', video: '../assets/videos/friend1.mp4' },
    { name: 'Friend 2', video: '../assets/videos/friend2.mp4' },
    { name: 'Friend 3', video: '../assets/videos/friend3.mp4' }
    // Add more friends/videos here as needed
  ];

  let currentIndex = 0;
  const nameEl = document.getElementById('friend-name');
  const videoEl = document.getElementById('friend-video');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  /**
   * Update the displayed name and video source
   */
  function updateDisplay() {
    const entry = friends[currentIndex];
    nameEl.textContent = entry.name;
    // Pause current video before switching
    videoEl.pause();
    videoEl.setAttribute('src', entry.video);
    videoEl.load();
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + friends.length) % friends.length;
    updateDisplay();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % friends.length;
    updateDisplay();
  });

  // Initialise the selector with the first entry
  updateDisplay();
})();