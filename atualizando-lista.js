// temos uma lista de nomes e queremos retirar dois nomes dela e adicionar outro
var nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
// os nomes que queremos retiraer sao Ana e Caio
//queremos adicionar Rodrigo
// PRIMEIRA MANEIRA
// vamos usar o .splice, seu primeiro argumento eh indice que queremos inicar a remocao
// seu segundo parametro eh quantos elementos a partir do primeiro argumento queremos retirar
nomes.splice(1, 2);
// teste se deu certo a remocao
console.log(nomes);
// agora vamos adicionar Rodrigo da mesma forma que ja vimos, com o .push
nomes.push('Rodrigo');
console.log(nomes);
// SEGUNDA MANEIRA
// podemos passar um terceiro argumento para o .slice
// esse terceiro argumento eh o elemento que vai ser inserido apos a retirada
nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
nomes.splice(1, 2, 'Rodrigo');
console.log(nomes);
// veja que tambem funciona