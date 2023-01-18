const notas = [10, 9.5, 8, 7, 6];

// const ponto = 1;

// for (let i = 0; i < 5; i++) {
//     let aux = notas[i] + ponto;
//     notas[i] = aux;
//     console.log(notas[i]);
// }


// o map nao altera o array original, por isso temos que salvar o resultado em um novo array 
const notasAtualizadas = notas.map((nota) => {
    // com operador ternario para anota nao passar de 10
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);