const playeras = [1, 2, "3", "4", { numero: 5 }, null, undefined, true]
const coleccionPlayeras = {}
console.log(playeras)
// método para agregar elementos
playeras.push(9, 10)
console.log(playeras)
//método para eliminar último elemento del array
playeras.pop()
console.log("usando método pop", playeras)
//método para eliminar el primer elemento del arreglo
playeras.shift()
console.log("usando método shift", playeras)
//método para añadir un elemento al principio del array
playeras.unshift("uno")
console.log(playeras)
//método para concatenar arreglo (concat)
const playeras2 = ["playeraM", "playeraG"]
const concatenar = playeras.concat(playeras2) 
console.log(concatenar)
//operador spread ...
const _spread = [...playeras, ...playeras2]
console.log("usando spread", _spread)

console.log(playeras[4])
console.log(playeras.length)

