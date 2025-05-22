// DATE CIBLE
const targetDate = new Date("2025-08-16T00:00:00+09:00");

// COMPTE À REBOURS
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "C'est le grand jour !!!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").textContent = `J - ${days} avant nos retrouvailles`;
}

// ANIMATION AVION : se rapproche chaque semaine
function movePlane() {
  const now = new Date();
  const totalWeeks = Math.ceil((targetDate - new Date("2024-05-16")) / (1000 * 60 * 60 * 24 * 7));
  const elapsedWeeks = Math.floor((now - new Date("2024-05-16")) / (1000 * 60 * 60 * 24 * 7));
  const percent = Math.min(elapsedWeeks / totalWeeks, 1);
  const newLeft = 10 + percent * 70; // de 10% à 80%
  document.getElementById("plane").style.left = newLeft + "%";
}

// CŒURS : nombre selon la semaine
function updateHearts() {
  const container = document.getElementById("hearts");
  container.innerHTML = "";
  const now = new Date();
  const elapsedWeeks = Math.floor((now - new Date("2024-05-16")) / (1000 * 60 * 60 * 24 * 7));
  const heartCount = Math.min(1 + elapsedWeeks, 20);

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("img");
    heart.src = "images/heart.png";
    heart.className = "heart";
    container.appendChild(heart);
  }
}

updateCountdown();
movePlane();
updateHearts();
setInterval(updateCountdown, 60 * 1000);
