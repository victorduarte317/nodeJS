let express = require('express'); // pra usar os recursos do express, precisa dar require nele

let routes = express.Router(); // chama o recurso de rotas

routes.get('/', (req, res)=>{ // tratamento de rotas. O primeiro parametro é a rota, os outros são são as requisições e respostas do servidor

    res.statusCode = 200; // retorna o codigo http de conexao bem sucedida
    res.setHeader('Content-Type', 'text/html'); // recebe qual header tá sendo modificado e especifica que a linha abaixo é um text HTML pra ela ser processada como tal
    res.end('<h1> Olá </h1>');
});

module.exports = routes; // exporta routes pra quem chamar esse arquivo