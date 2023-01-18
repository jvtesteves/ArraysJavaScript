// vamos adicionar uma nota na media que foi esquecida
// declarando as notas que foram colocadas
const notas = [10, 6, 8];
// imprime as notas
console.log(`As notas sem alteracao sao ${notas} !`);
// calcula a media
var media = (notas[0] + notas[1] + notas[2]) / notas.length;
console.log(`A media eh ${media} !`);
// agora vamos adicionar a nova nota que eh 7
notas.push(7);
// imprimimos novamente para conferir
console.log(`As notas depois da alteracao sao ${notas} !`);
// calcula a nova media
media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
// imprimir a media
console.log(`A nova media eh ${media} !`);