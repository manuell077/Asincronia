/*15. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
obtenidos en la consola. */


let obtenerJson = async function(){ //Se crea una funcion asincrona 
     
    const respuesta = await fetch('../JSON/Ejercicio15.json') //se accede al archivo json atraves del metodo fetch que se utiliza para realizar peticiones HTTP o HTTPS
    const datos = await respuesta.json(); //Se convierte el archivo json en un objeto de javascript
    console.log(datos);//Se imprime por consola 

}

obtenerJson(); //Se llama a la funcion 