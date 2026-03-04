class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const alunos = [
    new Aluno('Daniel', 8),
    new Aluno('Maria', 5),
    new Aluno('Henrique', 6),
    new Aluno('Fran', 4),
    new Aluno('Namorado da Fran', 9)
];

function alunosAprovados(listaDeAlunos) {
    return listaDeAlunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);

console.log(aprovados);