// Node, criando servidor web

const express = require('express'); // cria uma variavel constante - que nao deve ser alterada - e cria o módulo
const consign = require('consign');
const bodyParser = require('body-parser');

let app = express(); // express é uma função que vai retornar todo o conjunto de informaçoes funcionando la dentro

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); // pra app usar bodyParser. Todos os dados que receber via post serao convertidos em json

consign().include('routes').into(app) // o consign vai incluir todos os arquivos criados em routes na variavel app, fazendo com que não seja mais necessário dar require arquivo por arquivo
// agora ele passa o app pros outros arquivos, então ocorrerão mudanças lá também

    app.listen(3000, '127.0.0.1', ()=>{ // coloca a variável que recebeu o servidor vai ouvir a porta 3000 e receber o endereço IP do servidor

    console.log('servidor rodando!'); // executa a função de callback pra quando o servidor ficar online, ele avisar no console

});