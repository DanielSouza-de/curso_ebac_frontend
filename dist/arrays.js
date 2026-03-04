"use strict";

var redesSociais = ['Facebook', 'Instagram', 'twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Vagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'FrontEnd'
  };
});
console.log(alunos2);
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(indiceDaPaula);

// every

alunos2.push({
  nome: 'Lucio',
  curso: 'BackEnd'
});
var todosAlunosSaoDeFrontEnd = alunos2.every(function (item) {
  return item.curso === 'FrontEnd';
});
console.log(todosAlunosSaoDeFrontEnd);
var existeAlgumAlunoDeBackEnd = alunos2.some(function (item) {
  return item.curso === 'BackEnd' && item.curso === 'FrontEnd';
});
console.log(existeAlgumAlunoDeBackEnd);
function filtraAlunosDeBackEnd(aluno) {
  return aluno.curso === 'BackEnd';
}
var alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackEnd);
console.log(alunosDeBackEnd);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);