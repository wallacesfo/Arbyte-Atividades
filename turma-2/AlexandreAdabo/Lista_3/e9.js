let rs = require('readline-sync')

let palavra = rs.question('Escreva uma palavra: ')

let i = 0
while(i <= palavra.length){
    console.log(palavra.charAt(i))
    i++
}