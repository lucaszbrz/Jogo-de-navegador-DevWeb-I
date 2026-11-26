const simbolos = ["🍎", "🍌", "🍇", "🍓", "🍍", "🥝", "🍉", "🍒"];
const tabuleiro = document.querySelector("#tabuleiro");
const placarJogadas = document.querySelector("#jogadas");
const mensagem = document.querySelector("#mensagem");

// Estado do jogo
const estado = {
  primeira: null,   // primeira carta virada na jogada
  bloqueado: false, // true enquanto duas cartas diferentes estão à mostra
  jogadas: 0,
  pares: 0
};

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
  carta.addEventListener("click", cliqueNaCarta);
  return carta;
}

function mostrar(carta) {
  carta.classList.add("virada");
  carta.textContent = carta.dataset.simbolo;
}

function esconder(carta) {
  carta.classList.remove("virada");
  carta.textContent = "?";
}

function cliqueNaCarta(evento) {
  const carta = evento.currentTarget;
  if (estado.bloqueado || carta === estado.primeira || carta.classList.contains("par")) {
    return;
  }
  mostrar(carta);

  if (estado.primeira === null) {
    estado.primeira = carta;
    return;
  }

  estado.jogadas++;
  atualizarPlacar();
  verificarPar(estado.primeira, carta);
}

function verificarPar(a, b) {
  if (a.dataset.simbolo === b.dataset.simbolo) {
    a.classList.add("par");
    b.classList.add("par");
    estado.pares++;
    estado.primeira = null;
    if (estado.pares === simbolos.length) {
      fimDeJogo();
    }
  } else {
    estado.bloqueado = true;
    setTimeout(function () {
      esconder(a);
      esconder(b);
      estado.primeira = null;
      estado.bloqueado = false;
    }, 800);
  }
}

function atualizarPlacar() {
  placarJogadas.textContent = estado.jogadas;
}

function fimDeJogo() {
  mensagem.textContent = "Você venceu em " + estado.jogadas + " jogadas!";
}

function montarTabuleiro() {
  const cartas = embaralhar([...simbolos, ...simbolos]);
  for (const simbolo of cartas) {
    tabuleiro.appendChild(criarCarta(simbolo));
  }
}

montarTabuleiro();
