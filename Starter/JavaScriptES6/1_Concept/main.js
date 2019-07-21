class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

//Keywords
// const usuario = { nome: 'Diego' }; //Const can't be reassign;
// usuario.nome = 'Cleiton';
console.log(usuario);

function teste(x) {
    let y = 2;
    if (x > 5) {
        console.log(x, y);
    }
}
console.log(teste(18));


//operaçoes em arrays
{
    const arr = [1, 3, 4, 5, 8, 9];

    const newArr = arr.map(function (item, index) { //map permite manipular array
        return item + index;
    })

    console.log(newArr);

    const sum = arr.reduce(function (total, next) {
        return total + next;
    });
    console.log(sum);

    const filter = arr.filter(function (item) {
        return item % 2 === 0;
    });

    const find = arr.find(function (item) {
        return item === 4;
    });
    console.log(find);
}

//ArrowFunctions
const arr = [1, 3, 4, 5, 6];
const newArr = arr.map(item => item * 2);
console.log(newArr);

// const teste = () => {
//     return 'teste';
// }

// const teste = () => ({ nome: 'Diego' }); // retorna um objeto
// console.log(teste());

//Valores padrao:
//const soma = (a = 3, b = 9) => a + b;

//Desestruturação:
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}
mostraNome(usuario);

//Operadores rest/spread:
//REST pega o resto das propriedades
const user = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};
//const { nome, ...resto } = user;
console.log(nome);
// console.log(resto);

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

//SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat',
};
const usuario2 = { ...usuario1, nome: 'Gabriel' };

//template literals
const nome = 'Diego';
const idade = 23;
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

//Object short syntax:
const usuario3 = {
    nome,
    idade,
    empresa: 'Rocketseat',
};
console.log(usuario3); 
