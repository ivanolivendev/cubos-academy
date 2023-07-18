// const pessoa = {
//     nome: "Ivan",
//     profissao: "programador",
//     altura: 174,
//     idade: 69,
//     apresentar: function () {
//         console.log("olá")

//     }
// }

// console.log(pessoa.apresentar())



// // console.log(pessoa.apresentar())

// // function isJovem(pessoa) {


// //     if (pessoa.idade <= 18) {
// //         isJovem = " jovem ";
// //     }
// //     else if (pessoa.idade > 18 && pessoa.idade <= 65) {
// //         isJovem = "adulto"
// //     }
// //     else {
// //         isJovem = "idoso"
// //     }
// //     return isJovem;
// // }

// // function greetins(pessoa) {

// //     let jovem = isJovem(pessoa);

// //     console.log(`Olá meu nome é ${pessoa.nome}, ${jovem} de ${pessoa.idade} anos, ${pessoa
// //         .altura} de altura e sou ${pessoa.profissao}.`)
// // }

// // // greetins(pessoa);

// // // function juventude(idade) {

// if (idade < 21) {

//     return "Jovem"

// }

// else if (idade > 21 && idade < 65) {
//     return "Adulto"
// }

// else if (idade > 65) {
//     return "Idoso"
// }
// }

// // // console.log(juventude(66))

// // greetins(pessoa);

// // console.log(pessoa.apresentar())


let pessoa = {

    nome: "Ivan",
    profissao: "programador",
    altura: 174,
    idade: 33,
    saudacao: function () {
        console.log(`Meu nome é: ${this.nome}, tenho ${this.idade} e sou ${this.eJovem()}. Minha altura é ${this.altura
            }`)
    },
    eJovem: function () {
        let idade = this.idade;
        if (idade < 21) {
            return "Jovem"
        }
        else if (idade > 21 && idade < 65) {
            return "Adulto"
        }
        else if (idade > 65) {
            return "Idoso"
        }
    }
}




pessoa.saudacao();