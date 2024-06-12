let target;

const humanGuessInput = document.getElementById('human-guess');

const roundNumberDisplay = document.getElementById('round-number');

const computerGuessDisplay = document.getElementById('computer-guess');
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
const targetNumberDisplay = document.getElementById('target-number');
const computerWinsDisplay = document.getElementById('computer-wins');

const guessButton = document.getElementById('guess');
const nextRoundButton = document.getElementById('next-round')

guessButton.addEventListener('click', () => {
  // Gerar o valor alvo
  target = generateTarget();
  // Recuperar o palpite do jogador
  const currentHumanGuess = humanGuessInput.value;
   // Fazer um 'palpite do computador' aleatório
  const computerGuess = Math.floor(Math.random() * 10); 
  // Exibir o palpite do computador e o alvo
  computerGuessDisplay.innerText = computerGuess;
  targetNumberDisplay.innerText = target;

  // Determinar se o humano ou o computador vence:
  const humanIsWinner = compareGuesses(currentHumanGuess, computerGuess, target)
  const winner = humanIsWinner ? 'human' : 'computer'

  // Atualizar a pontuação correta:
  updateScore(winner);

  // Exibir o vencedor
  if (humanIsWinner) {
    guessButton.innerText = 'You Win!!!!!';
    guessButton.classList.toggle('winning-text')
  } else {
    computerWinsDisplay.innerText = 'Computer Wins!!!';
  }

  // Exibir as pontuações atuais:
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;

  // Definir o estado desativado correto para os botões
  guessButton.setAttribute('disabled', true)
  nextRoundButton.removeAttribute('disabled');
});

nextRoundButton.addEventListener('click', () => {
  // Aumentar o número da rodada
  advanceRound();
  // Exibir o novo número da rodada
  roundNumberDisplay.innerText = currentRoundNumber;

  // Definir o estado desativado correto para os botões
  nextRoundButton.setAttribute('disabled', true);
  guessButton.removeAttribute('disabled');

  // Redefinir a caixa de entrada do palpite e a exibição do número alvo:
  targetNumberDisplay.innerText = '?';
  guessButton.innerText = 'Make a Guess';
  humanGuessInput.value = '';
  computerGuessDisplay.innerText = '?';
  computerWinsDisplay.innerText = '';
  guessButton.classList.remove('winning-text');
});

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

addButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value + 1;
  handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value - 1;
  handleValueChange(humanGuessInput.value);
});


const handleValueChange = value => {
  // Converte o valor para número, caso ainda não seja.
  value = parseInt(value, 10);

  // Verifica os limites do valor e ajusta os botões.
  if (value > 1 && value < 9) {
    subtractButton.removeAttribute('disabled');
    addButton.removeAttribute('disabled');
  } else if (value >= 9) {
    addButton.setAttribute('disabled', true);
    subtractButton.removeAttribute('disabled');
  } else if (value <= 1) {
    subtractButton.setAttribute('disabled', true);
    addButton.removeAttribute('disabled');
  };

  // Correção para resetar para 1 quando alcançar 10
  if (value > 9) {
    humanGuessInput.value = 0; // Reset para o valor mínimo possível conforme sua lógica de negócio
    handleValueChange(humanGuessInput.value); // Chama a função novamente para ajustar os botões
  }
}