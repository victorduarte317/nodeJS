let express = require('express');

let routes = express.Router();

routes.get('/', (req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ // vai responder com json (express) no users e adicionar tudo dentro do bloco do users
        users:[{
                name: 'VICTOR',
                email: 'VICTOR@EMAIL.COM',
                id: 1
            }]
        });
});

routes.get('/admin', (req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ // vai responder com json (express) no users e adicionar tudo dentro do bloco do users
        users:[]
    });

});

module.exports = routes;