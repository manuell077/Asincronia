function Promisa(){
    
    return new Promise ((resolve,reject) => { //Creacion de la promesa 

       setTimeout(() => { //Imprimira despues 3 segundos 
            
        resolve("Promisa resuelta"); //si se resuelve

       },3000)

    })


}

Promisa().then((resultado) => alert(resultado) ); //con then obtenemos el resultado y lo imprimimos en pantalla con un alert 