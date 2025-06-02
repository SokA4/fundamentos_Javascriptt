let diasDelMes = 31;
let cuartaPartede10 = 2.5;
let Saludo = "Que onda!!";
let valorBooleano = true;
let arregloNumeros = [1, 2, 3, 4];
let objetoPersona = { nombre: "Ana", edad: 30 };
let valorIndefinido;
let valorNulo = null;
const mes = "Junio";
let arregloColores = ["verde", " morado", " rojo"];
let objetoUsuario = { nombre: "soka", correo: "luisecheverria@liceovvh.cl", edad: 30 };

// Funciones para mostrar cada valor con alert()
function mostrarDiasdelmes() {
  alert("Dias del mes " + diasDelMes);
}

function mostrarNumeroDecimal() {
  alert("Cuarta parte de 10: " + cuartaPartede10);
}

function mostrarCadenaTexto() {
  alert("Saludo: " + Saludo);
}

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
  alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}

function mostrarColores() {
  alert("Arreglo de colores: " + arregloColores);
}

function mostrarUsuario() {
  alert("Objeto usuario: " + JSON.stringify(objetoUsuario));
}