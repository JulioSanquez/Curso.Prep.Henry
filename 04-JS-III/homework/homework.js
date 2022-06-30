// No cambies los nombres de las funciones.
//Bien
function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


//Bien
function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}

//Bien
function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

//Bien
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    array[i]+=1;
  }
  return array;
}

//Bien
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

//Bien
function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

//Bien
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let frase = palabras[0];
  for (let i = 1; i < palabras.length; i++) {
    frase+=` ${palabras[i]}`
  }
  return frase;
}

//Bien
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.some((el) => {
    if(elemento === el) return true;
  });
}

//Bien
function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

//Bien
function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  resultadosTest.forEach(el => {
    suma += el;
  });
  return suma/resultadosTest.length;
}

//Bien
function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let numMay = 0;
  numeros.forEach(el => {
    if(numMay < el) numMay = el;
  });
  return numMay;
}

//Bien
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let parametro = 1;
  if(arguments.length === 0){
    parametro = 0;
  }else if(arguments.length === 1){
    parametro = arguments[0];
  }else{
    for (const key in arguments) {
        parametro *= arguments[key];
    }
  }
  return parametro;
}

//Bien
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let cant=0;
  arreglo.forEach(el => {
    if(el > 18) cant++;
  });
  return cant;
}

//Bien
function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  let esFin;
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    esFin = "Es fin de semana"
  } else {
    esFin = "Es dia Laboral"
  }
  return esFin;
} 

//Bien
function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString();
  return (num[0] == "9")?true:false;
}

//Bien
function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let esIgual = true;
  arreglo.forEach( el => {
    if (el !== arreglo[0]) esIgual = false;
  });
  return esIgual;  
} 

//Bien
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses = [];
  array.forEach( el => {
    if(el === "Enero" || el === "Marzo" || el === "Noviembre") meses.push(el);
  });
  return (meses.length === 3)?meses:"No se encontraron los meses pedidos";
}

//Bien
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let array2 = [];
  array.forEach( el => {
    if (el > 100) array2.push(el);
  });
  return array2;
}

//Bien
function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  //Tu código:
  let i = 1;
  let num2 = [numero+2,];
  while (i < 10) {
    if( i === ( num2[i-1] + 2 ) ){
      i=10;
    }else {
      num2.push( num2[i-1] + 2 ); 
    }
    i++;
  }
  return (i===11)?"Se interrumpió la ejecución":num2;
}

//Bien
function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let i = 1,x = 0;
  let num2 = [numero+2,];
  while (i < (10)) {
    if( i !== 5 ) num2.push( num2[num2.length-1] + 2 ); 
    i++;
  }
  return num2;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
