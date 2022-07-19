// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = [];
  for (const key in objeto) {
    array = [...array, [key, objeto[key]]]
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let obj = {};
  let x  = 0;
  for (const i of string) {
    if(obj[i] === undefined){
      obj = {...obj, [i]:1}
    }else{
      obj = {...obj, [i]:obj[i] + 1}
    }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let newS = "";
  let newS2 = "";
  for (const key in s) {
    if(s[key]!==s[key].toLocaleUpperCase()){
      newS +=  s[key];
      s.substring(key, key+1)
    }else{
      newS2 +=  s[key];
      s.substring(key, key+1)
    }
  } 
  return newS2 + newS;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arr = str.split(" "), arr2;
  console.log(arr);
  const inverter = (str2) => {
    let rts="";
    let len = str2.length;
    for (let i = 0; i < len; i++) {
      rts += str2[len-i-1];
    }
    return rts;
  }
  arr2 = arr.map(el => inverter(el));
  str = "";
  arr2.forEach( (el) => str += ` ${el}`); 
  str = str.slice(1);
  return str; 
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let str = numero.toString();
  let capicua = "Es capicua";
  let n = str.length;
  for (let i = 0; i < Math.floor(n/2); i++) {
     if(str[i]!==str[n-i-1]) capicua = "No es capicua"; 
  }
  return capicua;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //.deleteCharAt()
  let cadena2 = "";
  for (let i = 0; i < cadena.length; i++) {
    if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") cadena2 += cadena[i]; 
    console.log(cadena2 + "-----" + i);
  }
  return cadena2;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let p = 0; p < arr.length; p++) {
    for (let x = 0; x < arr.length; x++) {
      console.log(arr[i] +" ---- " + arr[x])
      console.log(arr[i].length < arr[x].length)
      if(arr[i].length < arr[x].length && i > x){
        let temp =  arr[x];
        arr[x] = arr[i];
        arr[i] = temp; 
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arr = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let x = 0; x < arreglo2.length; x++) {
      if(arreglo1[i] === arreglo2[x]){
      let noEsta = true;
      for (let y = 0; y < arr.length; y++) {
        if(arr[y] === arreglo1[i]) noEsta=false 
      }
      if(noEsta) arr = [...arr, arreglo1[i], ];
      }
    }
  }
  return arr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

