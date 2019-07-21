//Ex1:
class Usuario {

    constructor(email, senha) {
        this.email,
            this.senha
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
};

const user1 = new Usuario('pedro@gmail.com', '****');
const admin1 = new Admin('pedrols@hotmail.com', 'admin1');
console.log(user1.isAdmin());
console.log(admin1.isAdmin());

//Ex2:
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//ex2.1:
const ageFromUsers = usuarios.map(item => item.idade);
console.log(ageFromUsers);


//Ex 2.2:
const usersWorkInRocketseat = usuarios.filter(item => item.idade > 18 && item.empresa === 'Rocketseat');
console.log(usersWorkInRocketseat);

//Ex 2.3:
const userWorkInGoogle = usuarios.find(item => item.empresa === 'Google');
console.log(userWorkInGoogle);


//Ex 2.4:
const usersLowerThan50Age = usuarios
    .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50);

console.log(usersLowerThan50Age);

//Ex 3.1:
const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
// return item + 10;
// });
arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
// return usuario.idade;
// }

const showAge = user => user.idade;
console.log(showAge(usuario));


// 3.3
// Dica: Utilize uma constante pra function
const nome1 = "Diego";
const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
// return { nome, idade };
// }

const showUser = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(showUser(nome1, idade));
console.log(showUser(nome1));


// 3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//         return resolve();
// })
// }
const promise = new Promise((resolve, reject) => resolve());


// ex4:
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

//Ex4.1:
const { nome, endereco: { cidade, estado } } = empresa;
console.log(nome1);
console.log(cidade);
console.log(estado);


//Ex4.2:
// function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
//     }
function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//Ex5.1:
const arr2 = [1, 2, 3, 4, 5, 6];
const [first, ...resto] = arr2;
console.log(first);
console.log(resto);

function soma(...params) {
    return params.reduce((actual, next) => actual + next);
}
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));


//Ex5.2:
const usuario4 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = {
    ...usuario,
    endereco: { ...usuario.endereco }, cidade: 'Lontras'
};

//ex6:
const usuario5 = 'Diego';
const age = 23;
//console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
console.log(`O usuário ${usuario5} possui ${age} ' anos`);


//Ex7:
const nome2 = 'Diego';
const idade1 = 23;
// const usuario = {
// nome: nome,
// idade: idade,
// cidade: 'Rio do Sul',
// };

const usuario6 = {
    nome2,
    idade1,
    cidade: 'Rio do Sul',
    };
console.log(usuario6);