/*19. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
Promise.allSettled() para obtener información sobre el estado de todas las Promises. */

//Creacion de las tres promesas 
function PromesaUno(){
    return new Promise((resolve,reject)=>{
    
           setTimeout(()=>{
              resolve("Primer promise resuelta");
           },2000)
    
           
    
    })
    }
    
    function PromesaDos(){
        return new Promise((resolve,reject) => {
                 
            setTimeout(()=>{
                reject("Segunda promise resuelta");
             },4000)
    
    
        })
    }
    
    function PromesaTres(){
        return new Promise((resolve,reject) => {
                 
            setTimeout(()=>{
                resolve("Tercera promise resuelta");
             },6000)
    
    
        })
    }

//Despues de ejecutarse las tres promesas  el allsetteled nos retorna si la promesa se resuelve o se rechaza en un array este metodo recibe un array para iterar sobre las promesas

Promise.allSettled([PromesaUno(),PromesaDos(),PromesaTres()]).then((respuesta) =>{console.log(respuesta)});  
    