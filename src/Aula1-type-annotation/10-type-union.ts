function addAnConcat(a: string | number, b: string | number): string | number {
  if(typeof a === 'number' && typeof b === 'number') return a + b
  return `${a}${b}`
}

console.log(addAnConcat(10, 10));
console.log(addAnConcat('10', '10'));
console.log(addAnConcat(10, '10'));
console.log(addAnConcat('10', 10));