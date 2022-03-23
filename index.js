// Node, criando servidor web

const http = require('http'); // cria uma variavel constante - que nao deve ser alterada - e cria o módulo

let server = http.createServer((req, res)=>{ // o método cria o servidor e coloca ele na variável server, todas as solicitações que o servidor receber vão ser armazenadas na variável req

    console.log('URL:', req.url); // mostra a url que foi chamada (req)
    console.log('METHOD:', req.method); // mostra o metodo da chamada (req)

    switch(req.url) {

        case '/':
            res.statusCode = 200; // retorna o codigo http de conexao bem sucedida
            res.setHeader('Content-Type', 'text/html'); // recebe qual header tá sendo modificado e especifica que a linha abaixo é um text HTML pra ela ser processada como tal
            res.end('<h1> Olá </h1>');
        break;

        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ // vai dar o stringify no users e adicionar tudo dentro do bloco do users
                users:[{
                    name: 'VICTOR',
                    email: 'VICTOR@EMAIL.COM',
                    id: 1
                }]
            }));
   
        break;
    }
});

server.listen(3000, '127.0.0.1', ()=>{ // coloca a variável que recebeu o servidor vai ouvir a porta 3000 e receber o endereço IP do servidor

    console.log('servidor rodando!'); // executa a função de callback pra quando o servidor ficar online, ele avisar no console

});