function boletim(alunos, mediaFinal){
    let alunosAprovados = [];
    
    for(i = 0; i < alunos.length; i++){
        const { nota, nome } = alunos[i];
        if (nota >= mediaFinal){
            alunosAprovados.push(nome);
        }
    }
    return alunosAprovados;
}

const alunosList = [
    {nome: 'Joao',
    nota:5,
    turma: '1B'},
    {nome: 'Sofia',
    nota:9,
    turma: '1B'},
    {nome: 'Paulo',
    nota:6,
    turma: '2C'},    
    ];
let mediaNotas= 6;

boletim(alunosList, mediaNotas);