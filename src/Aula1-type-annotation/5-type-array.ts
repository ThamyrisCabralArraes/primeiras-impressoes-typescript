function multi(...args: Array<number>) {
  return args.reduce((acc, curr) => acc * curr, 1);
}
console.log(multi(2, 4, 5, 6));

function concat(...args: string[]) {
  return args.map((valor) => valor.toUpperCase());
}
console.log(concat('a', 'b', 'c'));
