const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 7,
		turma: '2C',
	},
];


function alunosAprovados(array, media){
    let aprovados = [];

        for(i = 0; i < array.length; i++){
            let {nota, nome} = array[i]
            if(nota >= media){ 
                aprovados.push(nome)  
            }
        }
        /* Uma outra forma fazer essa verificação, dessa vez utilizando o método .find()
            var alunoAprovado = array.find(aluno => aluno.nota >= 7);
            aprovados.push(alunoAprovado.nome)
        */
    return aprovados
}

console.log(alunosAprovados(alunos, 7));