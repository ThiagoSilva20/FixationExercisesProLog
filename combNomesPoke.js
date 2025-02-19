// Imagine um universo onde você é um Mestre Pokémon com o poder de criar 
// novas criaturas através da combinação de nomes. Seu algoritmo é a chave 
// para dar vida a esses seres incríveis. Você receberá uma primeira parte do 
// nome de um Pokémon e sua tarefa é completá-la com o sufixo mágico adequado, 
// revelando o nome completo do Pokémon.

// Tarefa: Sua missão é criar uma função extraordinária chamada 
// combinarNomePokemon. Essa função possui um toque mágico que transforma 
// uma entrada simples em algo verdadeiramente especial

function combinandoNomesPokemons(inicio_nome){
    let palavraPokemon = inicio_nome + "saur";
    return palavraPokemon;
    }  
  
    var nomeEntrada = gets();
  
    var palavraGerada = combinandoNomesPokemons(nomeEntrada);
  
    print(palavraGerada);