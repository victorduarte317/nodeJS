// Node, criando servidor web

const express = require('express'); // cria uma variavel constante - que nao deve ser alterada - e cria o módulo
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');


let app = express(); // express é uma função que vai retornar todo o conjunto de informaçoes funcionando la dentro
    
    // .use é um método que funciona como um plugin adicional que você queira executar no express   
    app.use(routesIndex);
    app.use('/users', routesUsers); // aqui diz que, todas as rotas de routesUsers começam com /users

    app.listen(3000, '127.0.0.1', ()=>{ // coloca a variável que recebeu o servidor vai ouvir a porta 3000 e receber o endereço IP do servidor

    console.log('servidor rodando!'); // executa a função de callback pra quando o servidor ficar online, ele avisar no console

});