let cartaoConsumo = {
    nome: "Ivan de Oliveira",
    idade: 33,
    produtosConsumidos: [{
        nomeProduto: "amendoin",
        preco: 1,
        qtdComprada: 1,
    },

    {
        nomeProduto: "halls",
        preco: 1,
        qtdComprada: 1,
    },
    {
        nomeProduto: "chiclets",
        preco: 1,
        qtdComprada: 4,
    }

    ]
}

// console.log(cartaoConsumo.nome)
// console.log(cartaoConsumo.idade)
// cartaoConsumo.idade = 23;
// console.log(cartaoConsumo.idade)
// console.log(cartaoConsumo.produtosConsumidos[0])
// console.log(cartaoConsumo.produtosConsumidos[2].preco)

let soma = 0;
let nome = cartaoConsumo.nome;

for (let x = 0; x < cartaoConsumo.produtosConsumidos.length; x++) {

    let produto = cartaoConsumo.produtosConsumidos[x].preco;
    let quantidade = cartaoConsumo.produtosConsumidos[x].qtdComprada;
    soma += (produto * quantidade)

}

console.log(`Olá Sr(a)${nome} ! O total a pagar é R$ ${soma} `)


