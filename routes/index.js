module.exports = (app)=>{

    app.get('/', (req, res)=>{ // tratamento de rotas. O primeiro parametro é a rota, os outros são são as requisições e respostas do servidor

        res.statusCode = 200; // retorna o codigo http de conexao bem sucedida
        res.setHeader('Content-Type', 'text/html'); // recebe qual header tá sendo modificado e especifica que a linha abaixo é um text HTML pra ela ser processada como tal
        res.end('<h1> Olá </h1>');
    });
    
};