//The filter creates a new array with all the elements that meet the condition implemented by the given function

//Mostrar el nombre de las frutas

//Filter

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
console.log(filterItems('an')); // ['banana', 'mango', 'orange'