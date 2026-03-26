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