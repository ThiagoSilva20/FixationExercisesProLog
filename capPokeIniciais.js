// No mundo dos jogos Pokémon, os treinadores começam sua jornada 
// escolhendo um dos três Pokémons iniciais: Bulbasaur, Charmander e 
// Mewtwo. Cada treinador escolhe um dos quatro pokemons. Seu desafio 
// é criar uma solução que permita ao jogador escolher um dos Pokémons 
// iniciais e exibir uma mensagem de boas-vindas e o Pokémon escolhido.

let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido; 

if ( escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if ( escolhaDoTreinador === 2 ) {
    pokemonEscolhido = "Charmander";
} else if ( escolhaDoTreinador === 4 ) {
    pokemonEscolhido = "Pikachu";
} else if ( escolhaDoTreinador === 5){
    pokemonEscolhido = "Mewtwo";
}

if (pokemonEscolhido) {
    print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
}