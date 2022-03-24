// Node, criando servidor web
// requerições de frameworks pra dentro do módulo
const express = require('express'); 
const consign = require('consign'); 
const bodyParser = require('body-parser'); 
const expressValidator = require('express-validator');

let app = express(); // express vai funcionar como uma função que retorna todo o conjunto de informaçoes funcionando la dentro

app.use(bodyParser.urlencoded({ extended: false })); // reconhece os objetos do request como string ou array. O extended true faz com que o URL "encodado" seja parseado pela qs library, enquanto false faz com que ele seja tratado pela querystring library.
app.use(bodyParser.json()); // pra app usar bodyParser. Todos os dados que receber via post serao convertidos em json
app.use(expressValidator());

consign().include('routes', 'utils').into(app) // o consign vai incluir todos os arquivos criados em routes na variavel app, fazendo com que não seja mais necessário dar require arquivo por arquivo
// agora ele passa o app pros outros arquivos, então ocorrerão mudanças lá também

    app.listen(3000, '127.0.0.1', ()=>{ // coloca a variável que recebeu o servidor vai ouvir a porta 3000 e receber o endereço IP do servidor

    console.log('servidor rodando!'); // executa a função de callback pra quando o servidor ficar online, ele avisar no console

});