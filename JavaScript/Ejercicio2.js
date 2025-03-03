/*2. En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
pesado que demora más de 100 ms en finalizar.
¿Cuándo se ejecutará la función programada y por qué se ejecutará?
a) Después del bucle.
b) Antes del bucle.
c) Al comienzo del bucle.
¿Qué va a mostrar alert()?*/

let i = 0 ;

setTimeout(() => {
    alert(i)
}, 100);

for(let j = 0; j < 100000000 ; j++){

    i++;
}

//RESPUESTA: se ejecutaria despues del bucle por lo cual la respuesta correcta es la (a) y el valor que va a mostrar alert es 100000000 y no 0 como seria si no estuviera el alert dentro del setTimeOut que es asincronico y el valor de 100000000 es por que se ejecuta el bucle completo que esta de manera sincronica 

console.log("se ejecutaria despues del bucle por lo cual la respuesta correcta es la (a) y el valor que va a mostrar alert es 100000000 y no 0 como seria si no estuviera el alert dentro del setTimeOut que es asincronico y el valor de 100000000 es por que se ejecuta el bucle completo que esta de manera sincronica  y despues el setTimeOut");