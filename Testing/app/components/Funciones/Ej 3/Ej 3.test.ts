/**
 * Ejercicio 3
 * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
 * ordene su contenido en orden alfabetico.
 *  * las letras de cada grupo están en orden aleatorio.
 *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
 *
 * Ejem:
 * dados los grupos de letras ["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"] en ese mismo orden
 * el resultado de la función debe ser ["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"] en ese mismo orden
 * 
*/

const GrupoLetras : any[] = [["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"]];
 
const Grupo1 = GrupoLetras[0].sort();
const Grupo2 = GrupoLetras[1].sort();
const Grupo3 = GrupoLetras[2].sort();

const Concatenadas = [Grupo1, Grupo2, Grupo3];
const Ordenadas = Concatenadas.sort();

console.log(Ordenadas); //Prueba

test('Letras ordenadas', () => {
    expect(Ordenadas).toEqual([["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]]);
    console.log(Ordenadas); //Resultado
})
