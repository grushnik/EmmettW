const gallery = document.getElementById("gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayArtworks(filter = "all") {
  gallery.innerHTML = "";

  const filteredArtworks =
    filter === "all"
      ? artworks
      : artworks.filter((art) => art.theme === filter);

  filteredArtworks.forEach((art) => {
    const card = document.createElement("div");
    card.className = "art-card";

    card.innerHTML = `
      <img src="${art.image}" alt="${art.title}" class="art-image">
      <div class="art-info">
        <h2>${art.title}</h2>
        <p class="date">${art.date}</p>
        <p>${art.note}</p>
        <span class="tag">${art.theme}</span>
      </div>
    `;

    gallery.appendChild(card);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    displayArtworks(filter);
  });
});

displayArtworks();
