const notas = [7, 7, 8, 9];
// usa-se o spread operator
const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);