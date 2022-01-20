/* -------------------------------------------------------------------------- */
//Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
function reversa(str) {
    return str.split("").reverse().join("");
}
//console.log(reversa('Hola Mundo'));
/**/
const invertirCadena = (str = '') => {
    (!str) 
    ? console.warn('Ingresa texto') 
    : console.log(str.split('').reverse().join(''));
}
//invertirCadena('Hola Mundo');



/* -------------------------------------------------------------------------- */
// Programa una función para contar el número de veces que se repite una palabra en un texto
// largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const contarRepeticiones = (str = '', palabra = '') => {
    if(!str){return console.log('No Ingresaste un texto')};
    if(!palabra) {return console.log('No ingresaste una palabra')};

    let i = 0,
     contador = 0;

    while(i !== -1) {
        i = str.indexOf(palabra, i)
        if(i !== -1) {
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${palabra} se repite ${contador} veces`);
}
//contarRepeticiones("hola mundo, adios mundo, hasta luego mundo", "mundo");




/* -------------------------------------------------------------------------- */
// Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
// igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function validarPalindromo(str){
    if(str === str.split("").reverse().join("")){
        return true
    } else {
        return false
    }
}
//console.log(validarPalindromo('salas'));
/**/
const palindromo = (str = '') => {
    if(!str) return console.warn('No ingresaste una palabra');

    //convierto el texto a minúscula
    str = str.toLowerCase();
    let alReves = str.split("").reverse().join("");

    return (str === alReves)
    ? console.log('Si, la palabra es palíndromo')
    : console.log('No, la palabra no es palíndromo');
}
//palindromo('salas')


/* -------------------------------------------------------------------------- */
// Programa una función que elimine cierto patrón de caracteres de un texto dado,
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarPatron = (str = '', patron = '') => {
    (!str)
    ? console.warn('No ingresaste un texto')
    : (!patron) 
        ? console.warn('No ingresaste un patrón')
        : console.log(str.replace(new RegExp(patron, 'ig'), ''))
        //ig: la i es para que no diferencie min o mas
        //ig: la g es para que no se detenga en la primer coincidencia y ejecute todas las que encuentre
}
eliminarPatron('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz')
    
