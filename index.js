//The map() method creates a new array with the results of the call to the indicated function applied to each of its elements.
//The filter creates a new array with all the elements that meet the condition implemented by the given function
//The find method execute the callback function once for each array index until it finds one where the callback returns a true value.



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