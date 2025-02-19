// Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar 
// biomas em diferentes regiões do mundo. Cada bioma tem características únicas, 
// como tipos de solo, vegetação e clima.

// Tarefa: Sua tarefa é coletar minérios enquanto ataca uma rocha com sua 
// picareta. Use loops e lógica de programação para representar cada golpe na 
// rocha e determinar qual minério foi obtido.

const quantidadeGolpes = parseInt(gets());

let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

for (let i = 0; i <= quantidadeGolpes - 1; i++) {
    let minaIndex = i % minerais.length;
  
    print((i+1) + ": " + minerais[minaIndex]  )
  
}