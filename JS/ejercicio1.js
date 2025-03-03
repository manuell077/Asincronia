//1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
//comenzando desde desde y terminando con hasta.
//Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
//• Usando setInterval.
//• Usando setTimeout anidado.

//Primera variante de la solucion  con setTimeout

    

let funcionAsincronica = function(desde,hasta){//funcion que recibe como parametro donde inicia y donde para
   
    
    
    if(desde <= hasta){

    setTimeout(() => {  console.log(desde);    desde++; funcionAsincronica(desde,hasta) } ,1000);
    }
    
    
    
}




let inicio = parseInt(prompt("Ingrese el inicio "));
let final = parseInt(prompt("Ingrese el final  "));

console.log(funcionAsincronica(inicio,final))

//