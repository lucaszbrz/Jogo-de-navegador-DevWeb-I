const simbolos = ["🍎", "🍌", "🍇", "🍓", "🍍", "🥝", "🍉", "🍒"];
const tabuleiro = document.querySelector("#tabuleiro");

// Embaralha a lista (algoritmo de Fisher-Yates)
function embaralhar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  return lista;
}

function criarCarta(simbolo) {
  const carta = document.createElement("button");
  carta.className = "carta";
  carta.dataset.simbolo = simbolo;
  carta.textContent = "?";
  carta.addEventListener("click", virarCarta);
  return carta;
}

function virarCarta(evento) {
  const carta = evento.currentTarget;
  carta.classList.toggle("virada");
  carta.textContent = carta.classList.contains("virada") ? carta.dataset.simbolo : "?";
}

function montarTabuleiro() {
  const cartas = embaralhar([...simbolos, ...simbolos]);
  for (const simbolo of cartas) {
    tabuleiro.appendChild(criarCarta(simbolo));
  }
}

montarTabuleiro();
