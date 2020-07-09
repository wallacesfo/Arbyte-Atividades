const rs = require('readline-sync')

let v1 = rs.questionFloat('Insira o valor a ser multiplicado: ')

let v2 = rs.questionFloat('Insira o segundo valor a ser multiplicado: ')

res = 0

while(v2 > 0){
    res = res + v1
    v2 --
}

console.log(res)