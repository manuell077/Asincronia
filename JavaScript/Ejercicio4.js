/*4. Crear una función filter que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• sí dicho callback devuelve true, pushea el elemento a un nuevo array
• devuelva el array final con los elementos que pasaron el "filtro".*/

function filter(array,callback){ //Funcion que recibe como parametros un arreglo y una callback 
    
    nuevoArray = [] //Se crea un nuevo arreglo 

    for(let i  = 0 ; i < array.length ; i++){ //Se recorre el arreglo que se paso como argumento 
        let resultado = array[i];  //El elemento donde se vaya identando de guarda en la variable 
        
            
            if( callback(resultado) == true){ //Si retorna true  de añade el elemento al nuevoarray 
                 
                nuevoArray.push(resultado);
                 
            }
    }
     
    return nuevoArray; //se ternorna el nuevo array 
}


function Boleano(numero){  // funcion callback que valdia si el nuemro que recib como paramtro es mayor a 5 si es mayor a 5 retornara true 

      if(numero > 5){

        return true
      }else{

        return false
      }

}

let array = [4,7,8,9,10,11,3] //Arreglo que vamos  a pasar como argumento 
console.log(filter(array,Boleano)); //recie los dos argumentos el array  y la funcion Boleano  que es el callback 