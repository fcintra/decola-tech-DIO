function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Joao',
    idade: 30
}

const pessoa2 = {
    nome: 'Matheus',
    idade: 26
}

const animal = {
    nome: 'Tedy',
    idade: 3,
    raca: 'vira lata'
}

//console.log(calculaIdade.apply(animal, [30]))
console.log(calculaIdade.call(animal, 3))