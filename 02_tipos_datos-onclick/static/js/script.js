//Declaración de variables
let diasDelMes = 31; //tipo numerico
let cuartaPartede10 = 2.5;
let saludo = "Que onda!!";
let esEstudiante = true;
let cuentaRegresiva = [3, 2, 1];
let objetoUsuario = { nombre: "soka", correo: "luisecheverria@liceovvh.cl", edad: 30 };
let valorIndefinido;
let valorNulo = null;
const año = "2025";
let arregloColores = ["verde", " morado", " rojo"];

// Funciones para mostrar cada valor con alert()
function mostrarDiasdelmes() {
  alert("Dias del mes " + diasDelMes);
}

function mostrarCuartapartede10() {
  alert("Cuarta parte de 10: " + cuartaPartede10);
}

function mostrarSaludo() {
  alert("Saludo: " + Saludo);
}

function mostrarEsEstudiante() {
  alert("Es Estudiante?: " + valorBooleano);
}

function mostrarCuentaRegresiva() {
  alert("Cuenta Regresiva: " + arregloNumeros);
}

function mostrarObjeto() {
  alert("Usuario: " + JSON.stringify(objetoUsuario));
}

function mostrarSexo() {
  alert("Sexo: " + valorIndefinido);
}

function mostrarVoto() {
  alert("Voto: " + valorNulo);
}

function mostrarConstante() {
  alert("Año: " + año);
}

function mostrarColores() {
  alert("Colores: " + arregloColores);
}
