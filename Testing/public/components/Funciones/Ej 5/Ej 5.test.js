"use strict";
/**
 * Ejercicio 5
 * cree una función que reciba dos arreglos y verifique que el primero contenga todos los elementos del segundo
 */
const Lunes = ['Huevos', 'Arepas', 'Vegetales', 'Aliños', 'Servilletas', 'Frutas'];
const Martes = ['Arepas', 'Frutas', 'Huevos'];
const Contiene = Lunes.some(r => Martes.includes(r));
console.log(Contiene);
test('Sí lo contiene', () => {
    expect(Contiene).toEqual(true);
    console.log(Contiene);
});
