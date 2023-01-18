const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log('Aluno esta cadastrado!');
        // desestrura a matriz para ficar mais facil a compreensao
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];
        const [alunos, medias] = listaDeAlunosEMedias;
        // confere o indice do alunos, para entao pesquisar sua media
        const indice = alunos.indexOf(aluno);
        // pega a media do aluno
        const mediaDoAluno = medias[indice];
        //imprime a media do aluno pesquisado
        console.log(mediaDoAluno);
    }else {
        console.log('Aluno nao encontrado!');
    }
}

exibeNomeENota('Juliana');