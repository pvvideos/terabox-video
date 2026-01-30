const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const video = posters.find(v => v.id === id);

if (!video) {
  document.body.innerHTML = "<h2>Video not found</h2>";
}

document.getElementById("details").innerHTML = `
  <div class="details-container">
    <div class="poster">
      <img src="${video.image}">
    </div>

    <h2>${video.title}</h2>
    <p>${video.description}</p>

    <a class="btn btn-play" href="${video.terabox}" target="_blank">
      ▶ PLAY VIDEO
    </a>

    <a class="btn btn-telegram" href="${video.telegram}" target="_blank">
      🚀 JOIN TELEGRAM
    </a>

    <div class="more-videos">
      <h3>More Videos</h3>
      <div class="more-videos-grid" id="moreVideos"></div>
    </div>
  </div>
`;

// More videos (current video remove)
const moreBox = document.getElementById("moreVideos");

posters
  .filter(v => v.id !== id)
  .slice(0, 20)
  .forEach(v => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${v.image}">
      <h3>${v.title}</h3>
    `;
    div.onclick = () => {
      window.location.href = `details.html?id=${v.id}`;
    };
    moreBox.appendChild(div);
  });

