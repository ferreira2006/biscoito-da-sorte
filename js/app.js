const btLimpar = document.getElementById("btLimpar");
const frase = document.getElementById("frase");
const historicoElemento = document.getElementById("historico");
const toggleTema = document.getElementById("toggleTema");
const biscoitoImg = document.getElementById("biscoitoImg");
const somBiscoito = document.getElementById("somBiscoito");
const spinner = document.getElementById("spinner");

let historico = [];
let frases = [];

// Pré-carrega o som
somBiscoito.load();

// Desativa o biscoito enquanto carrega
biscoitoImg.style.pointerEvents = "none";
spinner.style.display = "block";

// Carrega as frases
fetch('/biscoito-da-sorte/assets/frases.txt')
  .then(response => response.text())
  .then(data => {
    frases = data.split('\n');

    // Ativa o biscoito e esconde o spinner
    biscoitoImg.style.pointerEvents = "auto";
    spinner.style.display = "none";
  })
  .catch(error => console.error('Erro ao carregar as frases:', error));

// Quebrar Biscoito
biscoitoImg.addEventListener("click", () => {
  biscoitoImg.classList.add("quebrar");

  setTimeout(() => {
    biscoitoImg.classList.remove("quebrar");
    somBiscoito.currentTime = 0;
    somBiscoito.play();
    quebrarBiscoitoLocal();
  }, 500);
});

// Limpar histórico
btLimpar.addEventListener("click", () => {
  historico = [];
  historicoElemento.innerHTML = "";
  frase.textContent = "";
});

// Modo escuro
toggleTema.addEventListener("click", () => {
  document.body.classList.toggle("escuro");
});

// Função que pega uma frase da lista
function quebrarBiscoitoLocal() {
  const indice = Math.floor(Math.random() * frases.length);
  const novaFrase = frases[indice];

  frase.textContent = novaFrase;

  historico.push(novaFrase);
  if (historico.length > 5) historico = historico.slice(-5);

  historicoElemento.innerHTML = historico.map(f => `<li>${f}</li>`).join("");
}
