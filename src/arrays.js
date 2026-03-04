const redesSociais = ['Facebook', 'Instagram', 'twitter'];

for(let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Vagner'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'FrontEnd'
    }
})

console.log(alunos2);


const paula = alunos2.find(function(item) {
    return item.nome == 'Paula'
})

console.log(paula);

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula'
})

console.log(indiceDaPaula);

// every

alunos2.push({
    nome: 'Lucio',
    curso: 'BackEnd'
})

const todosAlunosSaoDeFrontEnd = alunos2.every(function(item) {
    return item.curso === 'FrontEnd'
})

console.log(todosAlunosSaoDeFrontEnd);

const existeAlgumAlunoDeBackEnd = alunos2.some(function(item) {
    return item.curso === 'BackEnd' && item.curso === 'FrontEnd'
})

console.log(existeAlgumAlunoDeBackEnd);

function filtraAlunosDeBackEnd(aluno) {
    return aluno.curso === 'BackEnd'
}

const alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackEnd)

console.log(alunosDeBackEnd);

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador
}, '')

console.log(nomesDosAlunos);