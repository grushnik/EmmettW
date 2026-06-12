const gallery = document.getElementById("gallery");

function displayArt(items) {
  gallery.innerHTML = "";

  items.forEach(art => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${art.image}" alt="${art.title}">
      <div class="card-content">
        <h2>${art.title}</h2>
        <p class="date">${art.date}</p>
        <p>${art.note}</p>
        <span class="tag">${art.theme}</span>
      </div>
    `;

    gallery.appendChild(card);
  });
}

function filterArt(theme) {
  if (theme === "all") {
    displayArt(artworks);
  } else {
    displayArt(artworks.filter(art => art.theme === theme));
  }
}

displayArt(artworks);
