type Item = (item: string) => string

function first(array: string[], callback: Item): string[] {
const newArray: string[] = []

for(let i = 0; i < array.length; i += 1) {
  let item = array[i]
  newArray.push(callback(item))
}
return newArray
}


function callback(item: string) {
return item.toUpperCase()
} 
const abc = ['a', 'b', 'c']

const resultado = first(abc, callback)

console.log(resultado)