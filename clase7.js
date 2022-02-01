/* -------------------------------------------------------------------------- */
//Programa una función que dado un array numérico devuelve otro array con los
//números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const factoriar = (array = '') => {
    if(array === '') return console.warn('No ingresaste ningún array');
    if(array.length === 0) return console.warn('No ingresaste numeros dentro del array');

    array.map((number) => {
        return console.log(number *= number);
    })
}

//factoriar('')
//factoriar([])
//factoriar([1, 4, 5])

/* -------------------------------------------------------------------------- */
//Programa una función que dado un array devuelva el número mas alto y el más
//bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const maxMin = (array = '') => {
    if(array === '') return console.warn('No ingresaste ningún array');
    if(array.length === 0) return console.warn('No ingresaste numeros dentro del array');

    //Usamos el ... antes de la palabra array para que así itere todos los objetos que tenga dentro
    return console.log('[' + Math.max(...array) + ', ' + Math.min(...array) + ']' );
}
//maxMin([1, 4, 5, 99, -60])




/* -------------------------------------------------------------------------- */
//Programa una función que dado un array de números devuelva un objeto con 2
//arreglos en el primero almacena los números pares y en el segundo los impares,
//pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const paresImpares = (array = '') => {
    if(array === '') return console.warn('No ingresaste ningún array');
    if(array.length === 0) return console.warn('No ingresaste numeros dentro del array');

    let pares = [];
    let impares = [];

    array.map((number) => {
        if(number % 2 === 0) {
            pares += number + ',';
        } else {
            impares += number + ',';
        }
    })

    return console.log(`Pares: [${pares}] Impares: [${impares}]`);

}
//paresImpares([1,2,3,4,5,6,7,8,9,0.28,13])