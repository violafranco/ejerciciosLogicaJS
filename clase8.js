/* -------------------------------------------------------------------------- */
// Programa una función que dado un arreglo de números devuelva un objeto con dos
//arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo
//de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const numOrdenador = (array = '') => {
    if(array === '') return console.warn('No ingresaste ningún array');
    if(array.length === 0) return console.warn('No ingresaste numeros dentro del array');

    return console.info({
        asc: array.map(e => e).sort(),
        desc: array.map(e => e).sort().reverse()
    });
}
//numOrdenador([7,5,7,8,6])



/* -------------------------------------------------------------------------- */
//Programa una función que dado un arreglo de elementos, elimine los duplicados, pe.
//miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const repetido = (array = '') => {
    if(array === '') return console.warn('No ingresaste ningún array');
    if(array.length === 0) return console.warn('No ingresaste numeros dentro del array');

    return console.info({
        sinDuplicado: array.filter((valor, index, self) => self.indexOf(valor) === index)
    });
    
}
//repetido(["x", 10, "x", 2, "10", 10, true, true])



/* -------------------------------------------------------------------------- */
//Programa una función que dado un arreglo de números obtenga el promedio,
//pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = (array = '') => {
    if(array === '') return console.warn('No ingresaste ningún array');
    if(array.length === 0) return console.warn('No ingresaste numeros dentro del array');

    let cant = array.length;
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }

    return console.log(`El promedio es ${suma/cant}`);
}
//promedio([9,8,7,6,5,4,3,2,1,0])