let rs = require('readline-sync');

let cor = rs.question('Qual a cor do veiculo: ');
let marca = rs.question('Qual a marca do veiculo: ');
let modelo = rs.question('Qual o modelo do veiculo: ');

let Carro = {
    modelo,
    cor,
    marca
};

Carro.cor = cor;
Carro.modelo = modelo;
Carro.marca = marca;

console.log(Carro);