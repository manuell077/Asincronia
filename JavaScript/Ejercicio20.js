/*20. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
lista de elementos uno por uno. */

let vector = [3,4,6] //Vector que vamos a pasar como argumento 


function promesa(i){ //Promesa que se resuelve si es menor o mayor a 5 despeus de dos segundos 
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
        if(i > 5){
            resolve("El numero es mayor de 5 ")
        }else{
            resolve("El numero es menor de 5")
        }
    },2000)
    })
}

async function procesar(arreglo,callback){ //Funcion asincrona que 
for(let i = 0;i < arreglo.length;i++){ //Ciclo for que recorre el arreglo 
     await callback(arreglo[i]).then((respuesta)=>{console.log(respuesta)}); //Espera a que la promesa se resuelva he imprime la respuesta
    
}
}


procesar(vector,promesa);//Se le pasan com oargumentos el arreglo y el callback 

