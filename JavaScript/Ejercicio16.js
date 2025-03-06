/*16. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
mostrar solo los nombres que comiencen con "A"). */

async function formatoJson(){
      
    const archivo = await fetch('../JSON/Ejercicio16.json'); //Se hace la peticion con el fetch al archivo json 
    const objeto =  await archivo.json(); //Se obtiene el arhivo json 

    return new Promise((resolve,reject) =>{ //Se resuelve la promesa 
        
        resolve(objeto) //Resuelve que nos devuelve los objetos en json 
        

    })


}


formatoJson().then((resultado)=>{

     let result = resultado.filter(persona => persona.edad >= 25); //Filtracion de datos segun condicion ES IMPORTANTE QUE EL ARCHIVO JSON TENGO LOS OBJETOS DENTRO DE UN ARRAY[] POR QUE LA FUNCION FILTER SOLO FUNCIONA CON ARREGLOS
     console.log(result) //Se imprime resultados

})