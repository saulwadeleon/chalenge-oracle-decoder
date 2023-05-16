// JavaScript
// Obtener los elementos del formulario de encriptacion
var entradaTexto = document.querySelector('#textoEntrada');
var salidaTexto = document.querySelector('#textoSalida');
var encriptarBtn = document.querySelector('#btnEncriptar');
var desencriptarBtn = document.querySelector('#btnDesencriptar');
var copiarBtn = document.querySelector('#btnCopiar');

/*Funcion que valida que el campo de texto no se encuentre vacion y que solo se permiten 
  letras minusculas sin acentos, sin numeros y sin catacteres especiales */
function validarTexto(texto) {
  if (texto === "") {
    alert("El campo de texto está vacío. Por favor, ingrese algún texto.");
    return false;
  }
  let regex = /^[a-z\s]+$/;
  if (!regex.test(texto)) {
    alert("Solo se permiten letras minúsculas sin acentos, sin números y sin caracteres especiales (, . ? ! ¡ ¿ _ - / \)"
    );
    return false;
  }
  return true;
}

/* Esta funcion encripta el texto introducido en el textarea
Se utilizan varios metodos "replace()" encadenados para realizar las sustituciones de caracteres 
en el texto encriptado. Para reemplazar todas las coincidencias, se utiliza una expresión regular 
con la bandera "g" (global) al buscar. */
function encriptar(texto) {
  let textoEncriptado = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
  return textoEncriptado;
}

/* Esta funcion encripta el texto introducido en el textarea
Se utilizan varios metodos "replace()" encadenados para realizar las sustituciones de caracteres 
en el texto encriptado. Para reemplazar todas las coincidencias, se utiliza una expresión regular 
con la bandera "g" (global) al buscar. */
function desencriptar(texto) {
  let textoDesencriptado = texto
    .replace(/ufat/g, 'u')
    .replace(/ober/g, 'o')
    .replace(/ai/g, 'a')
    .replace(/imes/g, 'i')
    .replace(/enter/g, 'e');
  return textoDesencriptado;
}

//Funcion copiar texto encriptado o desencriptado
function copiar(texto) {
  navigator.clipboard.writeText(texto)
}

// Evento y funciones del botón encriptar
encriptarBtn.addEventListener('click', function () {
  let texto = entradaTexto.value;
  if (validarTexto(texto)) {
    let textoEncriptado = encriptar(texto);
    textoSalida.style.backgroundImage = 'none';
    salidaTexto.value = textoEncriptado;
    copiarBtn.style.display = 'inline-block';
    entradaTexto.value = "";
  }
});

// Evento y funciones del botón desencriptar
desencriptarBtn.addEventListener('click', function () {
  let texto = entradaTexto.value;
  if (validarTexto(texto)) {
    let textoDesencriptado = desencriptar(texto);
    textoSalida.style.backgroundImage = 'none';
    salidaTexto.value = textoDesencriptado;
    copiarBtn.style.display = 'inline-block';
    entradaTexto.value = "";
  }
});

// Evento y funciones  del botón copiar
copiarBtn.addEventListener('click', function () {
  copiar(salidaTexto.select());
  alert("Texto copiado al portapapeles");
  entradaTexto.value = salidaTexto.value;
  salidaTexto.value = "";
  copiarBtn.style.display = 'none';
  console.log(textoSalida.style.backgroundImage);
  salidaTexto.style.backgroundImage = "url('imagenes/muneco.png')";
  console.log(textoSalida.style.backgroundImage);
});

