// Você é um herói em um mundo mágico repleto de monstros e desafios. 
// Sua missão agora é enfrentar inimigos e ganhar pontos de experiência 
// (XP) para se tornar mais forte. A cada vitória, você ganha XP e se 
// aproxima de se tornar um lendário campeão.

// Tarefa: Escreva um programa simples que simule o ganho de XP após derrotar 
// um monstro. O programa deve calcular e exibir a quantidade de XP ganhos com 
// base no nível do monstro e na dificuldade da batalha.

let lvlMonster = parseInt(gets());
let difBattle = parseInt(gets());

const xpGanho = lvlMonster * difBattle * 100;

print("Voce ganhou " + xpGanho + " XP!");