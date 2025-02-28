/*3. Crear una función map que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• obtenga el resultado
• lo pushee a un nuevo array
• devuelva el array final con el resultado de cada una de las llamadas al callback.*/

function map (array,callback){ //Funcion map que recibe como parametro un array y una callback 
     
    let nuevoArray = [];  //Se declara un nuevo array donde vamos a incrementar los elementos 
    for(let i = 0 ; i < array.length ; i++){ //Recorre el arreglo que se paso como parametro 
        let elemento = array[i]; //Declara un elemento que guarda el indice de un arreglo 
        nuevoArray.push(callback(elemento)); //Se agrega al arreglo el callback el cual recibe como argumento el elemento anterior y le suma dos al numerp
        
    }
    
    return nuevoArray; //Retornamos el nuevo arreglo 

}


function Operacion(element){ //Funcion callback la cual recibe como parametro un number que es el elemneto del arreglo 
     
     let resultado = element + 2; //El resultado de la operacion 

     return resultado //retornamos el resultado 
     
     
}


let arregloArgumento = [1,2,3,4,5] //Arreglo que se va  apasar como argumento 

console.log(map(arregloArgumento,Operacion)); //Imprimimos el metodo map que recibe como argumento el arreglo y la callback que es la funcion operacion 

