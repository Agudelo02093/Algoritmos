/**
 * Ejercicio 7
 * Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible
 * by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5
 */

 let divisible = "";

 for (let i = 1; i <= 20; i++) {
     if (i % 3 !== 0 && i % 5 !== 0) divisible += i + " ";
     if (i % 3 === 0) divisible +=": Fizz ";
     if (i % 5 === 0) divisible +=": Buzz ";
   }

   console.log(divisible)
 
 
 test('Resultados', () => {
 expect(divisible).toEqual("1 2 : Fizz 4 : Buzz : Fizz 7 8 : Fizz : Buzz 11 : Fizz 13 14 : Fizz : Buzz 16 17 : Fizz 19 : Buzz ");
 console.log(divisible)
 })