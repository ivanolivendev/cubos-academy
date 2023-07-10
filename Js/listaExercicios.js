// Calculadora de 

let peso = 80;

let altura = 1.74;

let imc = peso / (altura * altura);

console.log("- - - - - - IMC - - - - - - - ");
console.log("");
console.log(`O valor do IMC é: ${imc}`);

// Fahrenheit x Celsius

let tempCelsius = 50;

let tempFareh = 50;

let farenheitToCelsius = (tempFareh - 32) / 1.8;

let celsiusToFarenheit = (tempCelsius * 1.8) + 32;

console.log("- - - - - - Celsius x Farenheit - - - - - - - ");

console.log("");

console.log("Convertendo 50 graus Celsius em Farenheit fica: " + celsiusToFarenheit + " °F ");

console.log("Convertendo 50 graus Farenheit em Celsius fica: " + farenheitToCelsius + " °C ");

// Desconto do tênis

let precoDoTenis = 300;

let desconto = 0.25;

let precoFinal = precoDoTenis - (precoDoTenis * desconto);

console.log("- - - - - - Preço do Tênis - - - - - - - ");

console.log("");

console.log(`O preço inicial era R$ ${precoDoTenis}, o desconto foi de ${desconto * 100}%. O preço final ficou em R$ ${precoFinal}`)

// Calcular juros compostos

let capital = 1000;

let taxaJuros = 0.25;

let tempo = 12;

let montante = capital * ((1 + taxaJuros) * tempo);

console.log("- - - - - - Juros Composto - - - - - - - ");
console.log("");

console.log(`O capital inicial é de R$ ${capital}, a taxa de juros é ${taxaJuros * 100}%, o tempo foi de ${tempo} meses. O Montante foi  de R$ ${montante}`);

// Calcular a distância entre dois pontos

let xa = 10;
let xb = 2;
let ya = 5;
let yb = 45;

let distanciaAB = Math.sqrt(((xb - xa) * (xb - xa)) + ((ya - yb) * (ya - yb)));


console.log("- - - - - - Distância entre dois pontos - - - - - - - ");
console.log("");

console.log(`O valor da distância entre o PONTO A e O PONTO B é ${distanciaAB}`)

// Velocidade 

let variacaoEspaco = 20;

let variacaoTempo = 2;

let velocidadeMedia = variacaoEspaco / variacaoTempo;

console.log("- - - - - - Velocidade Média - - - - - - - ");

console.log("");

console.log(`A velocidade média é de: ${velocidadeMedia} km/h`)

// Casos de COVID-19

let novosCasos = 11_240;

let casosAcumulados = 37_682_660;

let incidencia100Mil = 643_06;

console.log("- - - - - - Casos de Covid - - - - - - - ");

console.log("");

console.log(`O Brasil tem ${novosCasos} novos casos. Um total de  ${casosAcumulados} casos acumulados. O índice em 100 mil habitantes é de ${incidencia100Mil}`);

// Calculo do perímetro e área de um círculo

let raioCirculo = 2;
let perimetroCirculo = 2 * 3.14 * raioCirculo;

console.log("- - - - - - Casos de Covid - - - - - - - ");
console.log("");

console.log(`A formula do perímero de cículo é 2*PI*raio . Se ela possuir raio de 2m seu perímetro será de: ${perimetroCirculo}`);

// Soma dos ângulos internos de um polígono

let ladosPoligono = 7;
let somaAngulosInternosPoligono = (ladosPoligono - 2) * 180;

console.log("- - - - - - Soma dos Angulos Internos de um Polígono - - - - - - - ");
console.log("");
console.log(`A soma dos ângulos internos de um polígono de 7 lados é: ${somaAngulosInternosPoligono} ° graus`);

// Delta
let a = 5;
let b = 5;
let c = 5;
let delta = (b * b) - 4 * a * c;

console.log("- - - - - - Cáculo do Delta - - - - - - - ");
console.log("");
console.log(`O valor do delta é: ${delta}`);

// Volume de uma esfera

let raioEsfera = 5;
let volumeEsfera = (4 * 3.14 * (raioEsfera * raioEsfera * raioEsfera)) / 3

console.log("- - - - - - Cáculo do Volume de uma esfera - - - - - - - ");
console.log("");
console.log(`O volume de esfera de raio 5 é: ${volumeEsfera}`);

// Taxa de juros

let capitalJurosSimples = 1000;
let taxaJurosSimples = 0.45;
let tempoJurosSimples = 12;
let JurosSimples = capitalJurosSimples * taxaJurosSimples * tempoJurosSimples;

console.log("- - - - - - Cáculo do Juros - - - - - - - ");
console.log("");
console.log(`O cálculo do Juros simples em um capital de ${capitalJurosSimples}, com uma taxa de ${taxaJurosSimples}, durante ${tempoJurosSimples} meses rederá R$ ${JurosSimples}`)

// Área total de um cilindro

let raioCilindo2 = 20;
let alturaCilindro2 = 5;
// let areaTotaldoCilindro2 = 2 * 3.14 * raioCilindo2(raioCilindo2 + alturaCilindro2);


console.log("- - - - - - Área Total de um Cilindro - - - - - - - ");
console.log("");

// console.log(`área do cilindro é ${areaTotaldoCilindro2}`)