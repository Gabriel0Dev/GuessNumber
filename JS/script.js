let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Gera um numero aleatorio de 0 a 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

// Calcula a distância absoluta entre o valor alvo e um número fornecido
const getAbsoluteDistance = (target, number) => Math.abs(target - number);

// Compara as distâncias absolutas do palpite do usuário e do computador ao valor alvo
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    const userAbsDistance = getAbsoluteDistance(targetNumber, userGuess);
    const computerAbsDistance = getAbsoluteDistance(targetNumber, computerGuess);

    // Retorna true se a distância do usuário for menor ou igual à do computador
    return userAbsDistance <= computerAbsDistance;
}

// Atualiza a pontuação com base em quem venceu
const updateScore = winner => {
    if (winner === 'humano')
        humanScore++;
    else if (winner === 'computador')
        computerScore++
}

// Avança para a próxima rodada
const advanceRound = () => {
    currentRoundNumber++;
}