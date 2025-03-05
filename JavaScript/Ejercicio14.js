/*14. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
y mostrar el resultado final. */

let acumulador = 0;



function DevolverNum1(){
      return new Promise((resolve,reject)=>{ //Se crea promesa 
         
        setTimeout(() => {
            resolve( Math.floor(Math.random() * 10)); //se rsuelve la promesa y devuelve un numero random hasta 10
        }, 1000);

      });

}

DevolverNum1().then((result) => {
    alert(result);
    acumulador+= result;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result+1)
        }, 1000);
    })
}).then((result) => {
    alert(result);
    acumulador+= result;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result+1)
        }, 1000);
    })
}).then((result) => {
    alert(result);
    acumulador+= result;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result+1)
        }, 1000);
    })
}).then(() => {
    alert(acumulador)
})