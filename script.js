const dataFesta = new Date("Oct 26, 2026 20:30:00").getTime();

const x = setInterval(function () {
  const agora = new Date().getTime();
  const distancia = dataFesta - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown").innerHTML =
    `<span>${dias} dias</span> | <span>${horas}h</span> | <span>${minutos}m</span>`;
}, 60000);

// ===== PÉTALAS =====
const container = document.querySelector(".petalas-container");

function criarPetala() {
  const petala = document.createElement("img");
  petala.src = "imagens/rosepetala.png";;
  petala.classList.add("petala");

  const tamanho = 10 + Math.random() * 20;
  petala.style.width = tamanho + "px";

  petala.style.left = Math.random() * 100 + "vw";
  petala.style.animationDuration = (6 + Math.random() * 6) + "s";
  petala.style.opacity = 0.6 + Math.random() * 0.4;

  container.appendChild(petala);

  setTimeout(() => {
    petala.remove();
  }, 12000);
}

setInterval(criarPetala, 300);