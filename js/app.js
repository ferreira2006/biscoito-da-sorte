const btLimpar = document.getElementById("btLimpar");
const frase = document.getElementById("frase");
const historicoElemento = document.getElementById("historico");
const toggleTema = document.getElementById("toggleTema");
const biscoitoImg = document.getElementById("biscoitoImg");
const somBiscoito = document.getElementById("somBiscoito");

let historico = [];

// Lista de frases
let frases = [];
//fetch('../assets/frases.txt') // não funciona
//fetch('https://ferreira2006.github.io/biscoito-da-sorte/assets/frases.txt') // funciona
  fetch('/biscoito-da-sorte/assets/frases.txt') // funciona
  .then(response => response.text())
  .then(data => {
    frases = data.split('\n');
    // Agora você pode usar o array 'frases' no seu aplicativo
  })
  .catch(error => console.error('Erro ao carregar as frases:', error));

// Quebrar Biscoito
biscoitoImg.addEventListener("click", () => {
  // Animação do biscoito
  biscoitoImg.classList.add("quebrar");
  setTimeout(() => biscoitoImg.classList.remove("quebrar"), 500);

  // Toca o som
  somBiscoito.play();

  // Mostra frase aleatória
  quebrarBiscoitoLocal();
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

  // Mostra a frase
  frase.textContent = novaFrase;

  // Salva no histórico
  historico.push(novaFrase);

  // Limita o histórico às 5 últimas frases
  if (historico.length > 5) {
    historico = historico.slice(-5); // pega só os 5 últimos elementos
  }

  // Atualiza lista no HTML
  historicoElemento.innerHTML = historico
    .map(f => `<li>${f}</li>`)
    .join("");
}

