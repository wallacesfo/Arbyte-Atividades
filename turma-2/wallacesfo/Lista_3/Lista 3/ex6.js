const rs = require('readline-sync')

let inverter = rs.question('insira uma palavra: ')
valor = inverter.toString().split("");
normal = valor.reverse().join("");
 
console.log(normal)