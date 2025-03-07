/*22. Crear un objeto proxy usando la clase Proxy */


let arreglo = ["Manuel","Kevin","Yari"]; //Se crea un arreglo con tres nombres 

let proxy = new Proxy(arreglo,{ //Se crea un proxy que tien como parametros el elemento puede ser un objeto o arregglo(que se pueda identar)
    get(target,propertys){ //Se obtiene el elemento 
        
          
               
            return target[propertys].toUpperCase(); //Retorna el indice de elemento en mayusculas 

          
        
    }
});


console.log(proxy[0]); //Accedenos al elemento en cierta posicion 




