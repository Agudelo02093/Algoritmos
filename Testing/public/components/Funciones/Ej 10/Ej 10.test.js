"use strict";
const Dice = require('./Funcion10');
const minimo = 1;
const maximo = 6;
const Dado1 = Math.round(Math.random() * (maximo - minimo)) + minimo;
const Dado2 = Math.round(Math.random() * (maximo - minimo)) + minimo;
const sumar = Dado1 + Dado2;
test('Dados', () => {
    expect(Dado1).toBeGreaterThanOrEqual(1);
    expect(Dado1).toBeLessThanOrEqual(6);
    console.log("Dado1 = ", Dado1);
    expect(Dado2).toBeGreaterThanOrEqual(1);
    expect(Dado2).toBeLessThanOrEqual(6);
    console.log("Dado2 = ", Dado2);
});
test('Sumar Dados', () => {
    expect(sumar).toBeGreaterThanOrEqual(2);
    expect(sumar).toBeLessThanOrEqual(12);
    console.log("Suma de dados =", sumar);
});
var dos = 0;
var tres = 0;
var cuatro = 0;
var cinco = 0;
var seis = 0;
var siete = 0;
var ocho = 0;
var nueve = 0;
var diez = 0;
var once = 0;
var doce = 0;
var i;
for (i = 1; i <= 30; i++) {
    const Dado1 = Math.round(Math.random() * (maximo - minimo)) + minimo;
    const Dado2 = Math.round(Math.random() * (maximo - minimo)) + minimo;
    const suma = Dado1 + Dado2;
    switch (suma) {
        case 1:
            dos++;
            break;
        case 2:
            tres++;
            break;
        case 3:
            cuatro++;
            break;
        case 4:
            cinco++;
            break;
        case 5:
            seis++;
            break;
        case 6:
            siete++;
            break;
        case 7:
            ocho++;
            break;
        case 8:
            nueve++;
            break;
        case 9:
            diez++;
            break;
        case 10:
            once++;
            break;
        case 11:
            doce++;
            break;
    }
}
const Resultados = ["2:", dos, "3:", tres, "4:", cuatro, "5:", cinco, "6:", seis, "7:", siete, "8:", ocho, "9:", nueve, "10:", diez, "11:", once, "12:", doce];
test('Resultados de las 30 sumas', () => {
    console.log(Resultados);
});
