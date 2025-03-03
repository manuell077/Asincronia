/*5. Crear una función every que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si todas las llamadas al callback devolvieron true */

function every(array,callback){

    let contador = 0 ; 

    for(let i  = 0 ; i < array.length ; i++){ //Se recorre el arreglo que se paso como argumento 
        let resultado = array[i];  //El elemento donde se vaya identando de guarda en la variable 
        
        
        if(callback(resultado) == true){ //Se valida si el resultado que  retorna es true 
            
            contador += 1; //Se incrementa 
            
        }


    } 

    if(contador == array.length){ // se valida si los dos valores son iguales , si son iguales es que todas las llamdas son true 
        return true;
    }else{
        return false;
    }

}


function Boleano(numero){ //Recibe como parametro el numero que ingreso 
    
    if(numero < 10){ //Se valida si el numero es menor a 10 y retornara true 
 
        return true;
    }
}

let array = [1,2,3,4,5,8,12]; //Arreglo con los valores que vamos a pasar como argumentos 

console.log(every(array,Boleano)); //Se le pasa como argumento el array y el callback 
