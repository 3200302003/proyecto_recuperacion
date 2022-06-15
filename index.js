//The map() method creates a new array with the results of the call to the indicated function applied to each of its elements.


//Mostrar el nombre de los superheroes

//Map
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