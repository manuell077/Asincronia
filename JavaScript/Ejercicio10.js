function delay(ms){ //Funcion que recibe como parametros los milisegundos
   return new Promise((resolve,reject) => {  //Creacion de la proeda 

        setTimeout(() =>{
            resolve(console.log("Ejercicio resuelto")) //Ai se resuelve la promera imprime en consola lo siguiente 
        },ms)


   })
}

delay(3000).then(() => alert("Se ejecutara despues de segundos"));  //Se ejecutara 3 segundos depues ya que pasamos 3000milisegundos como argumento