//The map() method creates a new array with the results of the call to the indicated function applied to each of its elements.
//The filter creates a new array with all the elements that meet the condition implemented by the given function
//The find method execute the callback function once for each array index until it finds one where the callback returns a true value.
//The reduce method executes a reducer function on each element of an array, returning a single value as a result.
//The findIndex() method executes the callback function once for each array index until it finds one where callback returns a true value.
//The replace() method returns a new string with some or all of the matches of a pattern , each of these matches being replaced by replace.

//map
const Superheroes = [
    { nombre: "Tony", apellidos: "Stark" },
    { nombre: "Steve", apellidos: "Rogers" },
    { nombre: "Bruce", apellidos: "Banner" },
    { nombre: "Natasha", apellidos: "Romanoff" },
    { nombre: "Thor", apellidos: "Odinson" },
    { nombre: "Clint", apellidos: "Barton" },
    { nombre: "Bruce", apellidos: "Wayne" },
    { nombre: "Clark", apellidos: "Kent" },
];

function generarNombre({ nombre, apellidos }) {
    return `${nombre} ${apellidos}`;
}

const nombres = Superheroes.map(generarNombre);

console.log(nombres); // ["Tony Stark", "Steve Rogers", "Bruce Banner", "Natasha Romanoff", "Thor Odinson", "Clint Barton"]
//filter

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
const filterItems = query => {
    return fruits.filter((el) =>
        el.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']

//find
//encontrar el numero primo
function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, no encontrado
console.log([4, 5, 8, 12].find(isPrime)); // 5

//reduce
//dar un valor
[0, 1, 2, 3, 4].reduce(function(valorAnterior, valorActual, indice, vector) {
    return valorAnterior + valorActual;
}, 10);

// Primera llamada
valorAnterior = 10, valorActual = 0, indice = 0

// Segunda llamada
valorAnterior = 10, valorActual = 1, indice = 1

// Tercera llamada
valorAnterior = 11, valorActual = 2, indice = 2

// Cuarta llamada
valorAnterior = 13, valorActual = 3, indice = 3

// Quinta llamada
valorAnterior = 16, valorActual = 4, indice = 4

// el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 20

//FindIndex
//Encontrar el índice de un elemento en el array que sea número primo (o devolver -1 si no hay ningún número primo).
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start < 1) {
            return false;
        } else {
            start++;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, no encontrado
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2

//replace
//Reemplazar los grados de Farenheit
function f2c(x) {
    function convert(str, p1, offset, s) {
        return ((p1 - 32) * 5 / 9) + "C";
    }
    var s = String(x);
    var test = /(\d+(?:\.\d*)?)F\b/g;
    return s.replace(test, convert);
}

//Hoisting
//Dar el nombre de un gato
function nombreDelGato(nombre) {
    console.log("El nombre de mi gato es " + nombre);
}

nombreDelGato("Bigotes");