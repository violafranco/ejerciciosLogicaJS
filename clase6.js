/* -------------------------------------------------------------------------- */
//Programa una función que dada una cadena de texto cuente el número de vocales
//y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contarLetras = (cadena= '') => {
   if(!cadena) return console.warn('No ingresaste ningún texto');
   if(typeof cadena !== "string") return console.warn('No ingresaste un string');

   let vocales = 0;
   let consonantes = 0;

   cadena = cadena.toLocaleLowerCase()

   for (let letra of cadena) {
        if(/[aeiouáéíóú]/.test(letra)) {
            vocales++;
        }

        if(/[bcdfghijklmnñpqrstvwxyz]/.test(letra)) {
            consonantes++;
        }
   }

   return console.log({
       cadena,
       vocales,
       consonantes 
   });
}
//contarLetras('Hola mundo')
//contarLetras('ESTE ES UN TEXTO DE PRUEBA')




/* -------------------------------------------------------------------------- */
//Programa una función que valide que un texto sea un nombre válido, pe.
//miFuncion("Jonathan MirCha") devolverá verdadero.
const validarNombre = (nombre = '') => {
    if(!nombre) return console.warn('No ingresaste ningún texto');
    if(typeof nombre !== "string") return console.warn('No ingresaste un string');

    //el ^ dice que no puede haber nada antes de la expresión
    //el $ dice que no puede haber nada después de la expresión
    //el signo de + es para que lo evalue por cada caracter
    //\s para que acepte espacios en blanco
    let expReg = /^[A-Za-zÑñáéíóúÁÉÍÓÚ\s]+$/g.test(nombre)

    return (expReg)
    ? console.log(`${nombre} es válido`)
    : console.log(`${nombre} no es válido`);
}
//validarNombre()
//validarNombre(5)
//validarNombre('Franco viola')






/* -------------------------------------------------------------------------- */
//Programa una función que valide que un texto sea un email válido,
//pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarEmail = (email = '') => {
    if(!email) return console.warn('No ingresaste ningún email');
    if(typeof email !== "string") return console.warn('No ingresaste un string');

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

    return (expReg)
    ? console.log(`${email} es un email válido`)
    : console.log(`${email} no es un email válido`);
}
//validarEmail()
//validarEmail('Francoviolaok@gmail.com')