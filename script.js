const pages = [
  {
    text: 'It was a dark and stormy night.',
    animation: 'frame1.jpg',
    audio: 'thunderstorm.m4a',
  },
  {
    text: 'Two strangers both caught in the storm, lost.',
    animation: 'frame2.jpg',
    audio: 'thunderstorm.m4a',
  },
  {
    text: 'Do you ever feel like your brain will explode?',
    animation: 'BrainFreeze.jpg',
    audio: 'thunderstorm.m4a',
  },
  {
    text: 'OOF!',
    animation: 'Brain.gif',
    audio: 'thunderstorm.m4a',
  },
  {
    text: 'Connection with others gives us strength and peace.',
    animation: 'sun.gif',
    audio: 'thunderstorm.m4a',
  },
  {
    text: 'Remember the sun<br>will always rise.<br>With darkness comes light.',
    animation: 'treasure.gif',
    audio: 'thunderstorm.m4a',
  },
  {
    text: 'THE END',
    animation: 'end.gif',
    audio: 'thunderstorm.m4a',
  },
];

let currentPage = 0;

const animationDiv = document.getElementById('animation');
const textP = document.getElementById('story-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const rainOverlay = document.getElementById('rain-overlay');
const audio = document.getElementById('audio');

function updatePage() {
  const page = pages[currentPage];
  animationDiv.style.backgroundImage = `url(${page.animation})`;
  textP.innerHTML = page.text;
  audio.src = page.audio;
  audio.play();

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;

  // Clear previous rain drops & hide overlay initially
  rainOverlay.style.display = 'none';
  rainOverlay.innerHTML = '';

  if (currentPage === 0) {
    // Heavy rain + lightning
    rainOverlay.style.display = 'block';

    for (let i = 0; i < 100; i++) {
      const drop = document.createElement('div');
      drop.className = 'drop';
      drop.style.left = Math.random() * 100 + 'vw';
      drop.style.animationDuration = 0.4 + Math.random() * 0.3 + 's';
      drop.style.animationDelay = Math.random() + 's';
      rainOverlay.appendChild(drop);
    }

    const flash = document.createElement('div');
    flash.className = 'lightning-flash';
    rainOverlay.appendChild(flash);
  }
  if (currentPage === 1) {
    // Light rain only, no lightning
    rainOverlay.style.display = 'block';

    for (let i = 0; i < 30; i++) {
      const drop = document.createElement('div');
      drop.className = 'drop';
      drop.style.left = Math.random() * 100 + 'vw';
      drop.style.animationDuration = 1 + Math.random() * 1.5 + 's';
      drop.style.animationDelay = Math.random() + 's';
      drop.style.opacity = 0.5 + Math.random() * 0.3;
      rainOverlay.appendChild(drop);
    }
  }
  if (currentPage === 2) {
  }
  if (currentPage === 3) {
    document.body.classList.remove('sunrise');
  }
  if (currentPage === 4) {
    // Apply sunrise effect (dark blue to light blue)
    document.body.classList.add('sunrise'); // Trigger the sunrise effect
    animationDiv.style.display = 'block';
    textP.classList.remove('grow');

    // Set image to be displayed after transition completes
    setTimeout(() => {
      // animationDiv.style.display = 'block';
    }, 5000); // Wait for 5 seconds (duration of the animation)
  }
  if (currentPage === 5) {
    animationDiv.style.display = 'none';
    textP.classList.add('grow');
  }
  if (currentPage === 6) {
  }
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage();
  }
});

const page_0 = document.getElementsByClassName('page-0')[0];
const page_1 = document.getElementsByClassName('page-1')[0];

page_0.style.display = 'block';
page_1.style.display = 'none';

page_0.addEventListener('click', () => {
  page_0.style.display = 'none';
  page_1.style.display = 'block';
  updatePage();
});
