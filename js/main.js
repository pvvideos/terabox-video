const grid = document.getElementById("poster-container");

posters.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${item.image}">
    <h3>${item.title}</h3>
  `;

  card.onclick = () => {
    window.location.href = `details.html?id=${item.id}`;
  };

  grid.appendChild(card);
});

