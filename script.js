fetch('posts.json').then(r=>r.json()).then(data=>{
  let box=document.getElementById('posts');
  data.forEach(p=>{
    box.innerHTML+=`
    <a href="post.html?id=${p.id}" class="card">
      <img src="${p.image}">
      <span>${p.title}</span>
    </a>`;
  });
});
