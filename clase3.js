/* -------------------------------------------------------------------------- */
//Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numRandom = () => {
    return Math.floor( Math.random() * (600 - 501) ) + 501
}
//console.log(numRandom());



/* -------------------------------------------------------------------------- */
// Programa una función que reciba un número y evalúe si es capicúa o
// no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


const esCapicua = (num = 0) => {
    if(!num) return console.log('No ingresaste ningún número');
    if(typeof num !== 'number') return console.warn('El valor ingresado no es un número');

    //Primero convierto el numero a string
    num = num.toString();
    //Ahora lo doy vuelta a ver si es igual
    let alReves = num.split("").reverse().join("");

    return (num === alReves) ? console.log(`Si, el numero ${num} es capicúa`) : console.log(`No, el numero ${num} no es capicúa`);
}
//esCapicua(2002)
//esCapicua(20)
//esCapicua('2002')


/* -------------------------------------------------------------------------- */
// Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
// se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (num = undefined) => {
    if(num === undefined) return console.warn('No ingresaste un número');
    if(typeof num !== 'number') return console.log(`El valor ${num}, no es un número`);
    if(num === 0) return console.log(1);
    if(num < 0) return console.warn('El número debe ser positivo');

    let factorial = 1;
    for (let i = num; i > 1; i--) {
        factorial *= i; 
    }

    return console.log(`El factorial de ${num} es ${factorial}`);
}
//factorial(5)
//factorial(0)
//factorial('5')
//factorial(-5)