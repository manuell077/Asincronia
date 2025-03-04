function delay(ms){
   return new Promise((resolve,reject) => {

        setTimeout(() =>{
            resolve(console.log("Ejercicio resuelto"))
        },ms)


   })
}

delay(3000).then(() => alert("Se ejecutara despues de segundos")); 