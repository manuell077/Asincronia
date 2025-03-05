/*Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
diga "Operación completada". Utiliza async/await. */

function Promesa(){ //Se crea la promesa que se resuelve
   return new Promise ((resolve,reject) => {
         

    setTimeout( () => {  
       resolve("Operacion completada");//si se resuelve devuelve esta cadena 
    },1000)

   } )


}



async function asincronia() { //Se crea metodo asincronico que espera con el await a que se resuelva la promesa 
      
    let promise = await Promesa();
    alert(promise);
    

    
}

asincronia();