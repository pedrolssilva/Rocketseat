//Ex1:
function checkAge(age) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return age >= 18 ? resolve() : reject();
        }, 2000);
    });
}

checkAge(15)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.warn("Menor que 18");
    });

//Ex2
var inputElement = document.querySelector('#searchUser');
var buttonElement = document.querySelector('button');

const urlgetUserFromGitHub = 'https://api.github.com/users/';

buttonElement.onclick = searchRepositoryUser;

function renderRepositories(repos) {
    var listElement = document.querySelector('ul');
    for (repo of repos) {
        var item = document.createElement('li');
        var nameRepo = document.createTextNode(repo.name);
        item.appendChild(nameRepo); 
        listElement.appendChild(item);
    }
}

function searchRepositoryUser() {
    var user = inputElement.value;
    if (user !== "") {
        axios.get(urlgetUserFromGitHub + user + '/repos')
            .then(function (response) {
                renderRepositories(response.data);
            })
            .catch(function (error) {
                console.warn(error);
            });
    }
}