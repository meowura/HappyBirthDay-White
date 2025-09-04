// =================== Sakura effect ===================
const numPetals = 30;
for (let i = 0; i < numPetals; i++) {
  const petal = document.createElement("div");
  petal.className = "sakura";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.top = "-30px";
  petal.style.animationDuration = (5 + Math.random() * 5) + "s";
  petal.style.animationDelay = Math.random() * 5 + "s";
  petal.style.transform = `scale(${0.7 + Math.random() * 0.5})`;
  document.getElementById("login-page").appendChild(petal);
}

// =================== Password check ===================
function checkPassword() {
  const input = document.getElementById("password").value;
  const correctPassword = "050951";

  if (input === correctPassword) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("main-page").style.display = "block";
    document.body.style.background = "#fff";
    document.querySelectorAll('.sakura').forEach(el => el.remove());
  } else {
    document.getElementById("error").textContent = "Invalid password. Try again.";
  }
}

// =================== SMOOTH NAVBAR SCROLL ===================
document.querySelectorAll('.navbar .menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - document.querySelector('.navbar').offsetHeight,
        behavior: 'smooth'
      });
    }
  });
});

// =================== GALLERY CAROUSEL (NO SLIDE, JUST SWITCH) ===================
const galleryItems = [
  "white/white1.jpg",
  "white/white2.jpg",
  "white/white3.jpg",
  "white/white4.jpg",
  "white/white5.jpg",
  "white/white6.jpg",
  "white/white7.jpg",
  "white/white8.jpg",
  "white/white9.jpg",
  "white/white10.jpg",
  "white/white11.jpg"
];

let currentIndex = 0;
const imagesToShow = 3;

const carouselTrack = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function renderCarousel() {
  carouselTrack.innerHTML = "";
  for (let i = 0; i < imagesToShow; i++) {
    const imgIndex = (currentIndex + i) % galleryItems.length;
    const div = document.createElement('div');
    div.className = 'carousel-item';
    div.innerHTML = `<img src="${galleryItems[imgIndex]}" alt="Gallery Image">`;
    carouselTrack.appendChild(div);
  }
}

renderCarousel();

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  renderCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  renderCarousel();
});

// =================== MUSIC CONTROL ===================
const musicList = [
  "song1.mp3",
  "song2.mp3",
  "song3.mp3",
  "song4.mp3",
  "song5.mp3",
  "song6.mp3",
  "song7.mp3",
  "song8.mp3"
];

const bgMusic = document.getElementById("bg-music");
const toggleMusic = document.getElementById("music-toggle");

function playRandomMusic() {
  const randomIndex = Math.floor(Math.random() * musicList.length);
  bgMusic.src = musicList[randomIndex];
  bgMusic.play();
}

// Play random song on load
playRandomMusic();

// Play next random song when ended
bgMusic.addEventListener("ended", playRandomMusic);

// Play/pause toggle
toggleMusic.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    toggleMusic.textContent = "Pause Music";
  } else {
    bgMusic.pause();
    toggleMusic.textContent = "Play Music";
  }
});

// Update button text when paused/played by other means
bgMusic.addEventListener("pause", () => {
  toggleMusic.textContent = "Play Music";
});
bgMusic.addEventListener("play", () => {
  toggleMusic.textContent = "Pause Music";
});


