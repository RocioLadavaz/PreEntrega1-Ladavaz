//saludo de bienvenida

alert ("¡Bienvenido! Esta es una herramienta para evaluar el Indice de Masa Corporal de tu grupo de entrenamiento");

let numeroPersona = parseInt(prompt("Ingrese el numero de personas a evaluar"));

//ciclo por conteo for

for (let i = 0; i< numeroPersona;i++){
    let nombreUno= prompt("Ingrese el nombre de la persona a evaluar");
    let pesoActual = parseFloat(prompt("Ingrese el peso actual en kilogramos de "+ nombreUno)); 
    let tallaActual = parseFloat(prompt("Ingrese la talla en metros de "+ nombreUno +". Por favor utilice '.' para decimales"));
    let resultadoImc = imc (pesoActual,tallaActual);

    //Condicional if

    if (resultadoImc <18.5){
        alert ("Está bajo peso, necesita aumentar su masa corporal. Para ello es importante acudir a un profesional capacitado");
    } else if (resultadoImc >=18.5 && resultadoImc<24.9){
        alert ("Está en un peso saludable, su salud es óptima!");
    }else if (resultadoImc >=25 && resultadoImc <30){
        alert ("Está con sobrepeso, necesita mejorar sus habitos por lo que le recomendamos acudir a un profesional capacitado!");
    } else{
        alert ("Esta persona ingresa en la clasificación de obeso, necesita urgentemente cambiar sus hábitos. Disminuyendo tan solo un 10% del peso corporal, su salud aumentará de forma considerable.");
    }
}

//función
function imc(peso,talla){
    let resultadoImc = (peso/(talla*talla));
    return resultadoImc.toFixed(2); 
}

//saludo final

alert ("Muchas gracias por utilizar nuestros servicios.");


















