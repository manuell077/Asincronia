/*18. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto. */


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
            resolve("Segunda promise resuelta");
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


//Resuelve todas las promesas que segun su sintaxis las recibe como un arreglo 
Promise.all([PromesaUno(),PromesaDos(),PromesaTres()]).then((resolver)=>{console.log(resolver); console.log("Promesas resueltas")});

