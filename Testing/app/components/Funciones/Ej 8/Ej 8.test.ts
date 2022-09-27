/**
 * Ejercicio 8
 * dado un arreglo de ideas, donde estas pueden ser buenas o malas, imprima un mensaje con las
 * siguientes condiciones:
 * - si el arreglo no contiene ninguna buena idea entonces el mensaje es "fallo"
 * - si el arreglo contiene 1 o 2 buenas ideas entonces el mensaje es "publicar"
 * - si el arreglo contiene más de 2 buenas ideas entonces el mensaje es "fantastico"
 */

const Ideas: string[] = ["Mala", "Mala", "Mala", "Buena", "Buena"];

var cuenta = 0; //Cambia para ver condicionales
var inicia = 0;

let aviso = "";

while ((inicia = Ideas.indexOf("Buena", inicia) + 1) > 0) {
    cuenta++;
}   if(cuenta === 0){aviso = "Fallo"}
    if(cuenta === 1 || cuenta === 2){aviso = "Publicar"}
    if(cuenta > 2){aviso = "Fantastico"}

    console.log(aviso)

test('La idea es', () => {
    expect(aviso).toEqual("Publicar");
    console.log(aviso)
})