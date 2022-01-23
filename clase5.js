/* -------------------------------------------------------------------------- */
// Programa una función que devuelva el monto final después de aplicar un
// descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const descuento = (precio = undefined, descuento = 0) => {
    if(!precio) return console.warn('No ingresaste un precio');
    if(!descuento) return console.warn('No ingresaste el porcentaje a descontar');

    console.log( precio -= precio * descuento / 100 );
}
//descuento(1800, 10)



/* -------------------------------------------------------------------------- */
// Programa una función que dada una fecha válida determine cuantos años han
// pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calcAnios = (fecha = undefined) => {
    if(!fecha) return console.warn('No ingresaste ninguna fecha');
    if(!(fecha instanceof Date)) return console.warn('No ingresaste una fecha válida');

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMS = 1000 * 60 * 60 * 24 * 365;

    let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

    return(Math.sign(aniosHumanos) === -1)
        ? console.log(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.log((`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`))
            : console.log(`Estamos en el año actual ${fecha.getFullYear()}`);
}
//calcAnios()
//calcAnios(new Date())
//calcAnios(new Date(2103,2,5))
//calcAnios(new Date(2003,2,5))
//calcAnios(new Date(1984,4,23))