"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}(); //Keywords
// const usuario = { nome: 'Diego' }; //Const can't be reassign;
// usuario.nome = 'Cleiton';


console.log(usuario);

function teste(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

console.log(teste(18)); //operaçoes em arrays

{
  var _arr = [1, 3, 4, 5, 8, 9];

  var _newArr = _arr.map(function (item, index) {
    //map permite manipular array
    return item + index;
  });

  console.log(_newArr);

  var sum = _arr.reduce(function (total, next) {
    return total + next;
  });

  console.log(sum);

  var filter = _arr.filter(function (item) {
    return item % 2 === 0;
  });

  var find = _arr.find(function (item) {
    return item === 4;
  });

  console.log(find);
} //ArrowFunctions

var arr = [1, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); // const teste = () => {
//     return 'teste';
// }
// const teste = () => ({ nome: 'Diego' }); // retorna um objeto
// console.log(teste());
//Valores padrao:
//const soma = (a = 3, b = 9) => a + b;
//Desestruturação:

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario); //Operadores rest/spread:
//REST pega o resto das propriedades

var user = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}; //const { nome, ...resto } = user;

console.log(nome); // console.log(resto);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
} //SPREAD


var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
var usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Gabriel'
}); //template literals


var nome = 'Diego';
var idade = 23;
console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos")); //Object short syntax:

var usuario3 = {
  nome: nome,
  idade: idade,
  empresa: 'Rocketseat'
};
console.log(usuario3);
