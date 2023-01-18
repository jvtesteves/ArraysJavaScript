const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomePadronizados = nomes.map((nome) => {
    return nome.toLocaleUpperCase();
});

console.log(nomePadronizados);