/*17. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
luego manipule los datos recibidos para mostrar información específica.  */

async function llamada() {
     

    const peticion = await fetch('../JSON/Ejercicio17.json'); //Se busca el archivo json 
    const datos = await peticion.json();// se obtiene el json con objeto en arreglo 

    let result = datos.filter(jugador => jugador.nombre[0] == "C" ); //se filtra la priemra letra del nombre que empieze por "C"
    console.log(result)//Se imprime los objetos que muestran coincidencia 
}

llamada();