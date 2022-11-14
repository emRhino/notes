/**
 * 
 * Funkcja .map() działa na tabliach i elementach tablicopodobnych
 * Funkcja przyjmuje funkcję i zwraca funkcje po interowaniu przez poszczególne jej elementy
 * Przyjmuje parametry:
 * 
 * map( callbackFn( element, index, array ) { ... }, thisArg )
 * callbackFn - funkcja wywoływana dla każdego elementu tablicy po której iteruje
 * 
 */

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr2 = arr1.map(x => {
    if (x === 2) {
        return x
    }
})
console.log(arr2);