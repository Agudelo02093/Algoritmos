/**
 * ejercicio 1
 * cree una función que recibe 2 arreglos como parametros.
 * luego combina estos arreglos en uno solo, alternando sus valores.
 *
 * ejem: dados los arreglos ["h", "a", "c"] y [7, 4, 17, 10, 48],
 * la respuesta deber ser: ["h", 7, "a", 4, "c", 17, 10, 48]
 *
 * note que los arreglos pueden ser de diferente tamaños y el contenido puede ser cualquier tipo de dato
 * 
*/

const letras: any[] = ["h", "a", "c"];
const numeros: any[] = [7, 4, 17, 10, 48];

function Juntos (letras: any, numeros: any) {

    const array_juntos = letras.length + numeros.length
    const letrasyNumeros: any[] = [];
    for (let i = 0; i < array_juntos; i++) {
        if (letras[i]!== undefined) {
            letrasyNumeros.push(letras[i]);
        }
        if (numeros[i] !== undefined) {
            letrasyNumeros.push(numeros[i]);
        }
    }
    return letrasyNumeros;
}

console.log(Juntos(letras, numeros));

module.exports = Juntos;
