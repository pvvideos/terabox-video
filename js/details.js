const id = new URLSearchParams(window.location.search).get("id");
const video = posters.find(p => p.id == id);

document.getElementById("details").innerHTML = `
  <img class="main-img" src="${video.image}">
  <h2>${video.title}</h2>
  <p>${video.description}</p>

  <a class="btn play" href="${video.terabox}" target="_blank">▶ PLAY ON TERABOX</a>
  <a class="btn tg" href="${video.telegram}" target="_blank">🚀 JOIN TELEGRAM</a>

  <h3 class="more">More Videos</h3>
  <div class="grid">
    ${posters.filter(p => p.id != id).map(p => `
      <a href="details.html?id=${p.id}" class="card">
        <div class="img-box">
          <img src="${p.image}">
        </div>
        <h4>${p.title}</h4>
      </a>
    `).join("")}
  </div>
`;
