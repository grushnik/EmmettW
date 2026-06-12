const gallery = document.getElementById("gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentTheme = "all";
let currentIndex = 0;
let currentList = artworks;

function updateList(theme) {
  currentTheme = theme;
  currentIndex = 0;

  currentList =
    theme === "all"
      ? artworks
      : artworks.filter((art) => art.theme === theme);

  displayArtwork();
}

function displayArtwork() {
  gallery.innerHTML = "";

  if (currentList.length === 0) {
    gallery.innerHTML = `<p>No artwork in this category yet.</p>`;
    return;
  }

  const art = currentList[currentIndex];

  const viewer = document.createElement("section");
  viewer.className = `art-viewer ${art.theme}`;

  viewer.innerHTML = `
    <button class="nav-arrow left" onclick="previousArtwork()">‹</button>

    <div class="art-page">
      <div class="image-wrap">
        <img src="${art.image}" alt="${art.title}" class="art-image">
      </div>

      <div class="art-info">
        <p class="counter">${currentIndex + 1} / ${currentList.length}</p>
        <h2>${art.title}</h2>
        <p class="date">${art.date}</p>
        <p class="note">${art.note}</p>
        <span class="tag">${art.theme}</span>
      </div>
    </div>

    <button class="nav-arrow right" onclick="nextArtwork()">›</button>
  `;

  gallery.appendChild(viewer);
}

function nextArtwork() {
  currentIndex = (currentIndex + 1) % currentList.length;
  displayArtwork();
}

function previousArtwork() {
  currentIndex =
    (currentIndex - 1 + currentList.length) % currentList.length;
  displayArtwork();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    updateList(button.dataset.filter);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") nextArtwork();
  if (event.key === "ArrowLeft") previousArtwork();
});

let touchStartX = 0;

document.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener("touchend", (event) => {
  const touchEndX = event.changedTouches[0].screenX;
  const difference = touchStartX - touchEndX;

  if (difference > 50) nextArtwork();
  if (difference < -50) previousArtwork();
});

updateList("all");
