/*7. Crear una función find que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el elemento pasado como argumento del primer callback que devuelva true
• sí ningún callback devuelve true, devuelva undefined */

function find(array,callback){

    for(let i  = 0 ; i < array.length ; i++){ //Se recorre el arreglo que se paso como argumento 
     
        let resultado = array[i];//El elemento donde se vaya identando de guarda en la variable 

        while(callback(resultado)  != true){//Se le pasa como argumento 

           




        } 
                   
        
    
    } 







}


function devolver(numero){ //callback que recibe un numero ocmo parametro 
      
    if(numero <= 5){ //Numero es igual a true

        return true //que retorne el numero 
    }else {
        return false;
    }
}