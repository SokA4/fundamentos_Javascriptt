//Ejercicio Condiciones IF_ELSE
console.log("conexión con js establecida...")

/* Edad para votar 
Solicita la edad del usuario mediante promt().
(18 años o más) o no.
*/
function edadVotar(){
    let edad = parseInt(prompt("Ingrese su Edad"));//Input conversión string a número
    //Condición if - else if- else

    if (edad >=18){
        alert("Su edad " + edad + " aprobada para votar");

    }else if(edad >= 0 && edad <18){//&& compuerta AND
        alert("su edad " + edad + " no esta aprobado para votar. ");
    
    } else{
        alert("ingrese un valor valido.")
    }
};

/*Contraseña válida
 Pide una contraseña con prompt(). Si es igual a "1234", muestra un mensaje de acceso permitido. En caso contrario, muestra acceso denegado.*/

 function validarPassword(){
    let clave ="1234"
    let pass = prompt("Ingrese su Contraseña:");
    //condición estructura if - else

    if(pass == clave){
        alert("Acceso Permitido... ")
    } else{
        alert("Acceso Denegado...")
    }
 };