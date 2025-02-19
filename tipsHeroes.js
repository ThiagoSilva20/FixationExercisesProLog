const prompt = require('prompt-sync')();
class Heros{
    constructor (nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    tipoHero(){
        if (this.tipo.toLowerCase() === 'guerreiro'){
            console.log(`o ${this.tipo} atacou usando espada`);
        }else if(this.tipo.toLowerCase() === 'mago'){
            console.log(`o ${this.tipo} atacou usando magia`);
        }else if(this.tipo.toLowerCase() === 'monge'){
            console.log(`o ${this.tipo} atacou usando artes marciais`);
        }else if(this.tipo.toLowerCase() === 'ninja'){
            console.log(`o ${this.tipo} atacou usando shurikens`);
        }else {
            console.log(`O ${this.tipo} atacou de uma forma desconhecida`);
        }
    }
}

let nome = prompt("Olá, jovem aventureiro! Qual é o seu nome? ");
let idade = parseInt(prompt(`Muito bem, ${nome}! Agora me diga, qual a sua idade? `));
let tipo = prompt(`Muito bem, ${nome}! Por fim, me diga: qual caminho você escolhe para sua jornada? Você se identifica como Guerreiro, Mago, Monge ou Ninja? `);

let helloHero = new Heros(nome, idade, tipo);

console.log(`O nome do Heroi mais forte do mundo é ${helloHero.nome}, com a idade de ${helloHero.idade} e o(a) jovem é um ${helloHero.tipo === '' ? 'Heroi desconhecido': helloHero.tipo} `);
helloHero.tipoHero();
