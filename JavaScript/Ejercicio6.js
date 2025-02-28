/*6. Crear una función some que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si al menos una de las llamadas al callback devolvió true */

function some(array,callback){
    
    let contador = 0;

    for(let i  = 0 ; i < array.length ; i++){ //Se recorre el arreglo que se paso como argumento 
        let resultado = array[i];//El elemento donde se vaya identando de guarda en la variable 
        if(callback(resultado) == true){ //Validacion del retorno del callback

             contador++; //Se incrementa 
        }
       
    }

    if(contador >= 1){ // Validacion que se cumple la condicion una  o mas veces   retorna true en caso verdadero y falso donde la validacion es falsa 
          return true; 
    }else{
        return false;
    }

}


function Boleano(numero){ //Callback que recibe como parametro el numero y valida si el numero es mayor a 20  y retorna true si es  verdadero 
    
    if(numero > 20){
       
        return true

    }
    

}

let array = [1,3,19] //Arreglo que contiene 3 numeros 
console.log(some(array,Boleano)); //Se le pasa como argumento el arreglo y el callback 