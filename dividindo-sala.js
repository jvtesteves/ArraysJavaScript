// vamos declarar o nome dos alunos para depois dividilos em salas
const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
// vamos printar a lista de alunos
console.log(alunos);
// agora, usando o .slice, vamos dividir a sala
// o primeiro parametro do slice eh o indice onde queremos comecar a divisao
// o segundo argumento eh onde vamos parar, lembrando que esse indice nao sera incluso na divisao
const sala1 = alunos.slice(0,10);
// se quisermos fazer algo que sempre separe na metade podemos fazer da seguinte forma
// const sala1 = alunos.slice(0, length / 2);
console.log(sala1);
// agora repetimos os mesmos passos para a segunda metade da turma
const sala2 = alunos.slice(10);
console.log(sala2);