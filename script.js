document.addEventListener("DOMContentLoaded", function () {
  alert("JS LOADED");

  const container = document.getElementById("poster-container");
  if (!container) {
    alert("Container nahi mila");
    return;
  }

  posters.forEach(function (item) {
    const box = document.createElement("a");
    box.href = "details.html?id=" + item.id;
    box.className = "poster";

    box.innerHTML =
      '<img src="' + item.image + '">' +
      '<h3>' + item.title + '</h3>';

    container.appendChild(box);
  });
});
