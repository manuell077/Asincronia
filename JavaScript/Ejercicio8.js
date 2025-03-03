/*Crear una función findIndex que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el índice del elemento pasado como argumento del primer callback que
devuelva true
• sí ningún callback devuelve true, devuelva undefined */

function findIndex(array,callback){

    for(let i  = 0 ; i < array.length ; i++){ //Se recorre el arreglo que se paso como argumento 
     
        let resultado = array[i];//El elemento donde se vaya identando de guarda en la variable 

        if(callback(resultado)  == true){//Se le pasa como argumento
          
            return i;


        }
                   
    
    } 

}

function devolver(numero){ //callback que recibe un numero como parametro 
      
    if(numero <= 5){ //Numero es igual a true

        return true ;//que retorne el numero 
    }else {
        return false;
    }
}
//Argumentos que se envian a la funcion devolver 
let arreglo = [6,6,6,1];
console.log(findIndex(arreglo,devolver));



