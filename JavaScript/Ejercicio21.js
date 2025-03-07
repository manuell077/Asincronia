/*21 . Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
try/catch para mostrar un mensaje de error en caso de fallo. */


async function llamada() { //Creacion de la funcion llamada 
     
    try{ //Se intenta ejecutar 
       
        let respuesta = await fetch("../JSON/Ejercicio21.json"); //se hace la solicitud del arhivo json 

        if(respuesta.ok == false){ //se valida si la solicitud es verdadera o falsa 
            throw new Error("No se pudo cargar el archvo  ") //Se crea el nuevo error 
            
        }

        let datos = await respuesta.json(); //Se  tranforman los datos 
        console.log(datos); //se imprimen 

    }catch(error){ //Se obtiene el error 
              console.log(error);//Se imprime el error 
    }
}

llamada();