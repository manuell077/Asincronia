//9. ¿Cuál es el resultado del código a continuación?

let i = 0;

setTimeout(() => alert(i),100);

for(let j = 0 ; j <100000000 ; j++){

    i++;
}

console.log("El resultado es de 100000000 ya que primero se ejecuta de manera sincronica el codigo y despues lo asincronico con el event loop")