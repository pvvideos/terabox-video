const container = document.getElementById("poster-container");

posters.forEach(item => {
  const card = document.createElement("a");
  card.href = `details.html?id=${item.id}`;
  card.className = "card";

  card.innerHTML = `
    <div class="img-box">
      <img src="${item.image}">
    </div>
    <h3>${item.title}</h3>
  `;

  container.appendChild(card);
});
