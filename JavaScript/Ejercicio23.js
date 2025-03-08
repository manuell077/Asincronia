/*23. Usar un proxy para la validación de los valores de propiedades
• Cuando declaremos que el atributo es numérico solo perimimos que ingresen
números
• Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
letras
• Cuando declaremos que el atributo es un email, solo permitimos que ingresen
correos
• Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
fechas
• Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
al final de estos y se debe mostrar el error personalizado por consola */

let arreglo = [123,122,112,"Manuel","manuelardila836@gmail.com","27/09/2005"," Manuel "];

let regexNumeros  = /^[0-9]+$/;
let regexAlfanuemrico = /^[a-zA-Z]+$/
let regexEmail = /^([a-zA-Z0-9])+@([a-zA-Z0-9])+\.([a-zA-Z]){1,4}$/
let regexDate = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/
let regexEspacios = /^\s+|\s+$/g

let ingresoDatos = parseInt(prompt("Ingresa la opcion valida con el numero acorde 1.Nuemros 2.Alfanuemrico 3.Email 4.Fecha 5.Espacios"));

switch(ingresoDatos){
 

case 1:    
let proxyNumeros = new Proxy(arreglo,{
    
     get(target,property){

        
        if(regexNumeros.test(target[property])){
              
           return  " Es  numero";
        }else{
            return " No es un numero"
        }    
        
     }


});

for(let i = 0 ; i < arreglo.length ; i++){
    console.log("El elemento del arreglo " + i  + proxyNumeros[i]);

}
break;

case 2:

let proxyAlfanuemrico = new Proxy(arreglo,{

       get(target,property){

          if(regexAlfanuemrico.test(target[property])){

              return " Es alfanumerico"
          }else{
              
            return " No es alfa nuemrico"

          }


       }
 


})  
for(let i = 0 ; i < arreglo.length ; i++){
    console.log("El elemento del arreglo " + i  + proxyAlfanuemrico[i]);

}

break;

case 3:

let proxyEmail = new Proxy(arreglo,{

     get(target,property){
         
        

            if(regexEmail.test(target[property])){
  
                return " Es EMAIL"
            }else{
                
              return " No es un email"
  
            }
  
        
     }
        

})

for(let i = 0 ; i < arreglo.length ; i++){
    console.log("El elemento del arreglo " + i  + proxyEmail[i]);

}

break;

case 4:
let proxyDate = new Proxy(arreglo,{

    get(target,property){
        
       

           if(regexDate.test(target[property])){
 
               return " Es un tipo date"
           }else{
               
             return " No es un tipo date"
 
           }
 
       
    }
       
 
})

for(let i = 0 ; i < arreglo.length ; i++){
    console.log("El elemento del arreglo " + i  + proxyDate[i]);

}

break;

case 5:

let proxyEspaciosBlancos = new Proxy(arreglo,{

    get(target,property){
        
       

           if(regexDate.test(target[property])){
 
               return " Tiene espacios blanco"
           }else{
               
             return " No tiene espacios blancos"
 
           }
 
       
    }


       
 
})

for(let i = 0 ; i < arreglo.length ; i++){
    console.log("El elemento del arreglo " + i  + proxyEspaciosBlancos[i]);

}

break;

default: alert("Elige una opcion valida");

}






