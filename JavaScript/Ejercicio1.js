/*1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado. */


//Primera validacion con setTimeOut
let imprimirNumeros = function(desde,hasta){
     

    if(desde <= hasta) //validar que el numero de inicio es menor o igual al numero final 

    setTimeout(()=>{
         console.log(desde); desde++; imprimirNumeros(desde,hasta); //Se imprime el valor de la variable , despues se autoincrementa y se utiliza recursividad pasandole como paramentro el nuevo valor de desde y el mismo valor de hasta
    },1000)//cada segundo 


}

//Segunda validacion con setInterval

let imprimirNumerosDos = function(desde,hasta){ //recibe dos parametros el inicio y el final del recorrido 

          
          setInterval(()=>{
            if(desde<=hasta){ //se valida que el desde llegue hasta el numero que ingreso el usurio dentro del intervalo 
               console.log(desde); //se imprimira 
               desde++;//se incrementara en cada vuelta la variable que estmos mostrando 
             }
          },1000)
        


}



//Solicitud de datos al usuario 
let inicio = parseInt(prompt("Ingrese el inicio ")); 
let final = parseInt(prompt("Ingrese el final "));


//Se pasan los argumentos a los dos metodos 
console.log("Con setTimeOut")
imprimirNumeros(inicio,final);

//Se jecuta 11 segundos despues con setTimeOut para que se logren destinguir
setTimeout(() => { console.log("Con setInterval"); imprimirNumerosDos(inicio,final);   },11000);





