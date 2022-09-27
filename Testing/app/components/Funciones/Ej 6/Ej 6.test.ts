/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 */

const revueltos: any[] = ["b", 6, "a", 7, 2, "q"]
 
 const letra1: any[] = revueltos.slice(0, 1);
 const letra2: any[] = revueltos.slice(2, 3);
 const letra3: any[] = revueltos.slice(5, 6); 
 
 const concatenar: any[] = letra1.concat(letra2, letra3);
 
 const ordenadoUno: any[] = concatenar.sort();
 
 
 const Numero: number[] = revueltos.filter(Number);
 
 const ordenadoDos = Numero.sort((a:any,b:any)=>a-b);
 
 const sorted = ordenadoUno.concat(ordenadoDos);

 console.log(sorted)
 
 test('Están ordenados', () => {
     expect(sorted).toEqual(["a", "b", "q", 2, 6, 7]);
     console.log(sorted)
 })