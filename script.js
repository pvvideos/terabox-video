alert("JS WORKING");

alert("posters type: " + typeof posters);

const container = document.getElementById("poster-container");

if (!container) {
  alert("container missing");
}

posters.forEach(function (item) {
  const a = document.createElement("a");
  a.href = "details.html?id=" + item.id;
  a.className = "poster";

  a.innerHTML =
    '<img src="' + item.image + '">' +
    '<h3>' + item.title + '</h3>';

  container.appendChild(a);
});
