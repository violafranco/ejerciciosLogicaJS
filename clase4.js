/* -------------------------------------------------------------------------- */
// Programa una función que determine si un número es primo (aquel que solo es
//divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const esPrimo = (num = 0) => {
    if(!num) return console.warn('No ingresaste ningún número');
    if(typeof num !== 'number') return console.warn(`El valor ${num} no es un número`);

    for (var i = 2; i < num; i++) {
        if (num%i==0){
            return console.log('false');
        }
    };
    return console.log('true');
}
//esPrimo()
//esPrimo('4')
//esPrimo(7)
//esPrimo(8)



/* -------------------------------------------------------------------------- */
//Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const parImpar = (num) => {
    if(!num && num !== 0) return console.warn('No ingresaste ningún número');
    if(typeof num !== 'number') return console.warn(`El valor ${num} no es un número`);

    (num % 2 === 0)
        ? console.log(`El número ${num} es par`)
        : console.log(`El número ${num} es impar`)
}
//parImpar()
//parImpar('3')
//parImpar(7)
//parImpar(22)

//Va a dar par pq como validacion puse que si es 0 lo deje pasar y luego cualquier número dividido
//por 0 va a dar 0, entonces entra en true
//parImpar(0)



/* -------------------------------------------------------------------------- */
//Programa una función para convertir grados Celsius a Fahrenheit y viceversa
//, pe. miFuncion(0,"C") devolverá 32°F.
const conversor = (num = undefined, letra = undefined) => {
    if(!num && num !== 0) return console.warn('No ingresaste ningún número');
    if(typeof num !== 'number') return console.warn(`El valor ${num} no es un número`);
    if(!letra) return console.warn('No ingresaste ningún valor');
    if(typeof letra !== 'string') return console.warn('El valor no es una cadena de texto');
    if(letra.length !== 1 || !/(C|F)/.test(letra)) return console.warn('Solo debes escribir C o F');


    if(letra === 'C'){
        return console.log(`${num}°C= ${Math.round(num*(9/5)+32)}°F`);
    } else {
        return console.log(`${num}°F= ${Math.round((num - 32) * 5/9)}°C`);
    }
}
conversor(40, 'C')
conversor(23, 'C')

conversor(32, 'F')
conversor(104, 'F')