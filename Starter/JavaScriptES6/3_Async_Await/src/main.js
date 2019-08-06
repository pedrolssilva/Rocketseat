//Ex1
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');
//         delay().then(() => {
//             console.log('2s');
//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }
// Funão delay aciona o .then após 1s
async function umPorSegundo() {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}
umPorSegundo();
// ---------------------------------------------------------------------------
//Ex2
import axios from 'axios';
// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//     console.log(response.data);
//     })
//     .catch(err => {
//     console.log('Usuário não existe');
//     })
//     }

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }
    catch (err) {
        console.log('Usuário não existe');
    }
}

getUserFromGithub('pedrolssilva');
getUserFromGithub('pedrolssilvashauhsau');

// ---------------------------------------------------------------------------
//Ex3
// class Github {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/repos/${repo}`)
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(err => {
//                 console.log('Repositório não existe');
//             })
//     }
// }
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }
        catch (error) {
            console.log('Repositório não existe');
        }
    };
}

Github.getRepositories('pedrolssilva/rocketseat');
Github.getRepositories('pedrolssilva/dslkvmskv');
// ---------------------------------------------------------------------------
//Ex4
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe 2');
    }
}
buscaUsuario('fersoftware');
