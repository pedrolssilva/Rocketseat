// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List {
//     constructor() {
//         super();

//         this.usuario = 'Diego';
//     }

//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}