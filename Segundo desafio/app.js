let contador = 0;

while (contador < 11) {
    console.log(`Imprimindo número ${contador}`)
    contador ++;    
}

console.log('_______________________________________');
contador = 11;
while (contador > 0) {
    console.log(`Imprimindo número ${contador}`)
    contador --;
}

console.log('_______________________________________');

contador = prompt('Diga um número para efetuar uma contagem regressiva: ')
while (contador > 0) {
    console.log(`Imprimindo número ${contador}`)
    contador --;
}

console.log('_______________________________________');

contador = 0;
let numero = prompt('Digite um número para efetuar a contagem: ')
while (contador <= numero) {
    console.log(`Imprimindo número ${numero}`);
    contador ++;    
}