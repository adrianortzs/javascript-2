/* 1. Escribe un programa que solicite al usuario ingresar dos números y determine cuál de los dos números es mayor. Imprime por consola lo siguiente:
    -Si el primer número es mayor: El número 'NUMERO 1' es mayor.
    -Si el segundo número es mayor: El número 'NUMERO 2' es mayor.
    -Si ambos números son iguales: Los números son iguales.*/

    // Escribe debajo tu código
    let numero1 = prompt("dame un número");
    let numero2 = prompt("dame otro");
    if (numero1 > numero2){
        console.log(numero1, "es mayor")
    }
    else if(numero2 > numero1){
        console.log(numero2, "es mayor")
    }
    else {
        console.log("ambos números son iguales")
    }

/* 2. Asigna a una variable llamada "number" un número. Escribe un programa que determine si ese número es positivo, negativo o igual a cero. Imprime por consola lo siguiente:
    -'NUMERO' es un número positivo.
    -'NUMERO' es un número negativo.
    -'NUMERO' es igual a cero.*/
    
    // Escribe debajo tu código
    let number = 3;
    if(number > 0){
        console.log("el número es positivo")
    }
    else if(number < 0){
        console.log("el número es negativo")
    }
    else {
        console.log("el número es igual a cero")
    }

/* 3. Crea un objeto llamado "persona" que represente a una persona con propiedades como nombre, edad, profesión y un método llamado saludar que imprima un saludo con el nombre de la persona. Por ejemplo: Hola, mi nombre es 'NOMBRE' y tengo 'EDAD' años. */

// Escribe debajo tu código
    let persona = {nombre:"Adrián",
    edad:21,
    profesión:"estudiante",
    saludar:function(){
        console.log("Hola,mi nombre es" + this.nombre + "y tengo" + this.edad + "años")
    }}

/* 4. Crea un objeto llamado 'coche' con propiedades 'marca', 'modelo' y 'velocidad', y un método llamado 'acelerar' que incremente la velocidad del coche en 10 km/h. */

// Escribe debajo tu código
    let coche = {marca:"Mercedes",
    modelo:"clase A",
    velocidad:180,
    acelerar:function(){
        this.velocidad + 10;
    }}

/* 5. Crea un objeto llamado 'fruta' con propiedades como 'nombre', 'color' y 'precio'. Luego, crea un método llamado 'descuento' que aplique un descuento del 10% al precio y muestre el precio con descuento. */

// Escribe debajo tu código
    let fruta = {nombre:"manzana",
    color:"rojo",
    precio:2,
    descuento:function(){
        this.precio * 0,9;
    }}

/* 6. Escribe un programa que determine si una persona puede obtener una licencia de conducir. Declara dos variables: una llamada edad y otra llamada tieneMultas. A esta última asígnale un valor booleano. Debe cumplir con dos condiciones: ser mayor de 18 años y no tener multas pendientes. Muestra en consola un mensaje distinto para cada caso. */

// Escribe debajo tu código
    let edad = prompt("¿Edad?")
    let tieneMultas = false
    if(edad >= 18 && !tieneMultas){
        console.log("Puedes obtener el carnet de conducir")
    }
    else if(edad < 18){
        console.log("No tienes la edad suficiente")
    }
    else {
        console.log("Paga las multas para obtener el carnet de conducir")
    }
