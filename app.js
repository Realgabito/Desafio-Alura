//Primer ejercicio
//Declaramos variable que llama al titulo del HTML
let titulo = document.querySelector('h1');
//Insertamos el texto que ese 'h1' tendra
titulo.innerHTML = 'Hora del Desafio';

//Segundo ejercicio
//Creamos una funcion para el boton de "console"
function onClickAction() {
    //Damos un mensaje de alerta
    alert('El boton fue clicado');
}

//Tercer ejercicio
//Creamos una funcion para el boton "Alert"
function alertButton() {
  //Damos una alerta con un mensaje personalizado
    alert('Yo amo JS');
}

//Cuarto ejercicio
//Creamos una funcion para el botom "Prompt"
function promptAction() {
    //Declaramos una variable que obtenga el nombre de una ciudad
    let ciudad = prompt('Indica una ciudad de brasil');
    //Creamos un mensaje de alerta que incluye la variable anterior 
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}

//Quinto ejercicio
//Creamos una funcion para el boton "Suma"
function suma() {

    //Preguntamos a los usuarios, con 2 variables para cada numero
    let num1 = prompt('Indica un numero');
    let num2 = prompt('Ahora otro, por fis!');

    //Convertimos los numeros de texto a digitos numericos
    let numero1 = parseFloat(num1);
    let numero2 = parseFloat(num2);

    //Sumamos los numeros
    let sumaTotal = numero1 + numero2;
    
    //Alertamos el resultado
    alert(`Tomala!, la suma de tus numeros es igual a ${sumaTotal}`)
}
