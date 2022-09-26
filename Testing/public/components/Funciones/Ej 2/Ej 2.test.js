"use strict";
/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */
const Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Pares = Numeros.filter(i => i % 2 === 0);
const Impares = Numeros.filter(i => i % 2 !== 0);
const listas = [Pares, Impares];
console.log(listas);
test('Son pares', () => {
    expect(Pares).toEqual([2, 4, 6, 8, 10]);
    console.log("Pares: " + Pares);
});
test('impares', () => {
    expect(Impares).toEqual([1, 3, 5, 7, 9]);
    console.log("Impares: " + Impares);
});
test('filtro', () => {
    expect(listas).toEqual([[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]);
    console.log(listas);
});
