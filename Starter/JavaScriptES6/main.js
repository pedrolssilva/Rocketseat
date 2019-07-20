class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

//Keywords
const usuario = { nome: 'Diego' }; //Const can't be reassign;
usuario.nome = 'Cleiton';
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
const arr = [1,3,4,5,6];
const newArr = arr.map(item => item *2);
console.log(newArr);

// const teste = () => {
//     return 'teste';
// }

const teste = () => ({nome: 'Diego'}); // retorna um objeto
console.log(teste());