const bintang = 100;
let stars = [];
let tinies = [];
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

function createStar() {
  let el = document.createElement("div");
  el.className = "star";
  el.style.visibility = "hidden";
  document.body.appendChild(el);
  return { el, x: 0, y: 0, life: 0 };
}

function createTiny() {
  let el = document.createElement("div");
  el.className = "tiny";
  el.style.visibility = "hidden";
  document.body.appendChild(el);
  return { el, x: 0, y: 0, life: 0 };
}

// inisialisasi
for (let i = 0; i < bintang; i++) {
  stars.push(createStar());
  tinies.push(createTiny());
}

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

function animate() {
  // buat bintang baru
  let s = stars.find(star => star.life === 0);
  if (s) {
    s.x = mouseX;
    s.y = mouseY;
    s.life = 50;
    s.el.style.left = s.x + "px";
    s.el.style.top = s.y + "px";
    s.el.style.visibility = "visible";
  }

  // update semua bintang
  stars.forEach((s, i) => {
    if (s.life > 0) {
      s.life--;
      s.y += 2;
      s.el.style.top = s.y + "px";
      s.x += (i % 5 - 2) * 0.3;
      s.el.style.left = s.x + "px";
      if (s.life === 0) {
        s.el.style.visibility = "hidden";
        let t = tinies[i];
        t.x = s.x;
        t.y = s.y;
        t.life = 25;
        t.el.style.left = t.x + "px";
        t.el.style.top = t.y + "px";
        t.el.style.visibility = "visible";
      }
    }
  });

  // update titik kecil
  tinies.forEach(t => {
    if (t.life > 0) {
      t.life--;
      t.y += 2;
      t.el.style.top = t.y + "px";
      if (t.life === 0) t.el.style.visibility = "hidden";
    }
  });

  requestAnimationFrame(animate);
}

animate();
