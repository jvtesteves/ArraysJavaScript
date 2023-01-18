const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

var salaUnificada = salaJS.concat(salaPython);

console.log(salaUnificada);
// repare que a ordem importa
var salaUnificada = salaPython.concat(salaJS);

console.log(salaUnificada);