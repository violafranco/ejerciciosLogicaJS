/* -------------------------------------------------------------------------- */
//Programa una función que cuente el número de caracteres de una cadena de texto
let srt = 'Hola mundo, soy juan carlos';
function contadorLetras(str) {
    return str.length
};
//console.log(contadorLetras(srt));

/* -------------------------------------------------------------------------- */
// Programa una función que te devuelva el texto recortado según el número de caracteres indicados
let texto = 'Hola mundo, soy juan carlos';
function cortarTexto(str, nroCaracteres){
    return str.slice(0, nroCaracteres)
}
//console.log(cortarTexto(texto, 6));

/* -------------------------------------------------------------------------- */
// Dado una String te devuelva un Array de textos separados por cierto caracter.
// Ej: miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
let texto1 = 'Hola mundo, soy juan carlos';
function separarTexto(str, tiposDeSeparacion){
    return str.split(tiposDeSeparacion)
}
//Primero paso que quiero cortar y el segundo parametro es para decir que cuando eso aparezca, ahí meta un corte
//console.log(separarTexto(texto1, ' '));

/* -------------------------------------------------------------------------- */
//Programa una función que repita un texto X veces.Ej: miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
let texto2 = 'Hola juan carlos ';
function repetir(str, nroVeces){
    return str.repeat(nroVeces)
}
//console.log(repetir(texto2, 2));
