const JuntosTest = require('./Ej 1');

test('Se combinaron letras y numeros', () => {
    const letrasyNumeros: any[] = ["h", 7, "a", 4, "c", 17, 10, 48];

    expect(letrasyNumeros).toEqual(["h", 7, "a", 4, "c", 17, 10, 48]);
    console.log(letrasyNumeros);
    
})