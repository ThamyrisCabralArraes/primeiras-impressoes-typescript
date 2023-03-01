function createPerson(firstName: string, lastName?: string): {firstName: string, lastName?: string} {
  return {
    firstName,
    lastName,
  }
}

function summ(x: any){
  if(typeof x === 'number') return x + 2
  return null
}

const stringNumber = summ(2)
const numberString = summ('2')

if(numberString === null) {
  console.log('nao é um numero')
} else {
  console.log(numberString)
}
