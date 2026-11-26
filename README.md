# Jogo da Memória — DevWeb I

Jogo da memória desenvolvido para navegador utilizando **JavaScript puro**, **HTML5** e **CSS3**. O objetivo é encontrar todos os **8 pares** no menor número de jogadas possível.

Projeto desenvolvido como parte da **Avaliação C3** da disciplina de **Desenvolvimento Web I**.

---

## Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da página, do tabuleiro, do contador de jogadas e da área de mensagem.
* **CSS3:** Layout em grade (*Grid*) e estados visuais das cartas (virada e par encontrado).
* **JavaScript (Vanilla):** Embaralhamento, controle de estado das jogadas, verificação de pares, contagem de jogadas e fim de partida.

---

## Status do Projeto

**Versão atual:** Segundo commit (lógica do jogo)

O jogo já pode ser jogado do início ao fim: o jogador vira duas cartas por jogada, os pares encontrados ficam abertos, os erros voltam a se esconder e, ao achar os 8 pares, aparece a mensagem de vitória com o total de jogadas.

Próximos passos:

* **Reinício:** botão para começar uma nova partida sem recarregar a página.
* **Recorde:** guardar o menor número de jogadas já feito.
* **Instruções na tela:** explicar as regras para quem abre o jogo pela primeira vez.
* **Acessibilidade (a11y):** navegação por teclado, foco visível e atributos `ARIA` para leitores de tela.

---

## Evolução do Projeto

### Do primeiro para o segundo commit

| Aspecto | Commit 1: Tabuleiro | Commit 2: Lógica do jogo |
|---|---|---|
| Jogabilidade | As cartas viram e desviram livremente ao clique, sem nenhuma regra | O jogador vira duas cartas por jogada; pares ficam abertos e erros voltam a se esconder |
| Estado do jogo | Não existe | Objeto `estado` com `primeira`, `bloqueado`, `jogadas` e `pares` |
| Verificação de pares | Não existe | `verificarPar()` compara o `dataset.simbolo` das duas cartas |
| Feedback visual | Apenas a cor da carta virada | Cor verde para o par, contador de jogadas e mensagem de vitória |
| Fim de partida | Não existe | `fimDeJogo()` é chamada quando os pares encontrados chegam a 8 |
| Tratamento de cliques | `classList.toggle` simples | `cliqueNaCarta()` ignora cliques inválidos |

#### Alterações por arquivo

* **`js/jogo.js`**
  * Criação do objeto `estado` para centralizar os dados da partida.
  * `cliqueNaCarta()` substitui `virarCarta()` e ignora cliques com o tabuleiro bloqueado, na mesma carta duas vezes ou em carta já pareada.
  * `verificarPar()` marca o par com a classe `.par` ou, em caso de erro, desvira as cartas após 800 ms com `setTimeout`.
  * `mostrar()` e `esconder()` isolam a troca de classe e de texto da carta.
  * `atualizarPlacar()` e `fimDeJogo()` atualizam a tela com `textContent`.
* **`index.html`**
  * Novo contador de jogadas (`#jogadas`) e novo parágrafo de mensagem (`#mensagem`).
* **`css/estilo.css`**
  * Estilo da carta pareada (`.par`) e da mensagem de vitória.

#### Decisões técnicas

* **Bloqueio durante o erro:** enquanto duas cartas diferentes estão à mostra, `estado.bloqueado` impede que o jogador vire uma terceira carta.
* **Comparação por `dataset`:** o símbolo de cada carta fica em `data-simbolo`, o que separa a lógica de comparação do texto exibido na tela.
* **Funções com uma responsabilidade:** cada função faz uma única tarefa (embaralhar, criar, mostrar, esconder, verificar), o que facilita testar e evoluir o código.

---

## Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/lucaszbrz/Jogo-de-navegador-DevWeb-I.git
   ```
2. Abra o arquivo `index.html` diretamente no seu navegador de preferência (ou utilize a extensão *Live Server* no VS Code).

---

## Uso de Inteligência Artificial

Em conformidade com as boas práticas acadêmicas, ferramentas de Inteligência Artificial foram utilizadas como apoio técnico neste projeto para:

* **Base do código:** geração da estrutura inicial do jogo (HTML, CSS e JavaScript), que depois foi revisada e testada.
* **Versionamento com Git:** Auxílio nos comandos de inicialização, organização e envio dos arquivos para o repositório remoto.
* **Boas práticas de repositório:** Estruturação da organização do projeto e das mensagens de commit.
* **Documentação Técnica (`README.md`):** Revisão textual e estruturação da descrição do projeto para garantir maior clareza, objetividade e conformidade técnica.
* **Renderização dos símbolos:** Orientação sobre formas mais leves e escaláveis de exibir os símbolos das cartas na tela, como caracteres Unicode/emojis, evitando a dependência de arquivos de imagem.
