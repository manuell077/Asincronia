function Promisa(){
    
    return new Promise ((resolve,reject) => {

       setTimeout(() => {
            
        resolve("Promisa resuelta");

       },3000)

    })


}

Promisa().then((resultado) => alert(resultado) );