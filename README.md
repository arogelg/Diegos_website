# Best Friend Gift Website

A minimalist, dark‑themed website built as a heartfelt gift to celebrate
friendship.  Inspired by the original anniversary site, this project
presents a few simple pages that highlight shared memories through
videos and photos.  The design leans toward an emo/rock aesthetic with
subtle skeleton‑inspired accents while avoiding anything offensive or
satanic.  All content is responsive and should look great on both
desktop and mobile screens.

## ✨ Features

- **Landing page** – A warm welcome with a catchy title and short
  description.  Dark, moody styling sets the tone and a single
  *Start the Journey* button invites your friend to explore.
- **Explanation page** – Briefly explains the purpose of the site
  and includes a simple *video selector*.  Use the left/right
  skeleton‑style arrows to switch between videos.  Each slide shows
  the person’s name and a playable video.
- **Video carousel** – A 3D‑style carousel (adapted from the
  anniversary site) that presents one video at a time.  Smooth
  transitions move items between centre, left and right positions.
  The caption below each video displays the friend’s name.  Left and
  right skeleton arrows allow manual navigation.  Videos auto‑pause
  when switching slides.
- **Picture compilation** – A responsive grid of photos representing
  shared memories.  Feel free to add as many pictures as you like
  here.  A button at the bottom lets you start over.

## 🗂 Project Structure

```
best-friend-website/
├── README.md               – This file
├── src/                    – Source HTML, CSS and JS
│   ├── index.html          – Landing page
│   ├── explanation.html    – Explanation + video selector
│   ├── carousel.html       – Video carousel page
│   ├── final.html          – Picture grid page
│   ├── css/
│   │   └── style.css       – Shared styles for all pages
│   └── js/
│       ├── videoSelector.js – Logic for the explanation page
│       └── videoCarousel.js – Logic for the carousel page
└── assets/
    ├── videos/             – **Place your video files here** (e.g.
    │   friend1.mp4, friend2.webm…)
    └── images/             – **Place your photos here** (e.g.
        memory1.jpg, memory2.png…)
```

## 📂 Placing Your Files

- **Videos**: Put your friendship videos into the
  `assets/videos/` directory.  Update the arrays in
  `js/videoSelector.js` and `carousel.html` so that each entry
  references the correct file name and includes the person’s name.
- **Pictures**: Put your photos into `assets/images/` and update
  `final.html` by duplicating the `<div class="grid-item"><img…></div>`
  blocks for each photo.  Replace the `src` attribute with your own
  filenames.

The project ships with empty `videos` and `images` folders to give
you a place to drop your own assets.  Feel free to create
subdirectories inside those folders if needed.

## 🛠 Running Locally

No special tooling is required—everything is plain HTML, CSS and
JavaScript.  To run the project locally:

1. Clone or download this repository.
2. Place your video and image files into the `assets` folders as
   described above.
3. Open `src/index.html` in your favourite web browser.  Because
   everything is self‑contained, you can simply double‑click the file
   or serve it via a lightweight server if you prefer.

For deployment on GitHub Pages, Netlify, Vercel, etc. you can serve
the `src` directory as static content.  Make sure that the `assets`
directory is deployed alongside `src` so that your videos and images
are accessible.

## 🎨 Customisation

The dark styling uses CSS variables and gradients so you can easily
tweak colours in `css/style.css`.  Look for the variables at the top
of the file (e.g. `--background-dark`, `--accent-colour`) and adjust
them to suit your taste.  Skeleton‑themed buttons are implemented
purely in CSS via borders and subtle shading; if you wish to use
external icons or fonts, simply replace the content inside the
buttons.

Enjoy making this gift uniquely yours!