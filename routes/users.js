

module.exports = (app)=>{

    app.get('/users', (req, res)=>{ // método get (padrao)

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
    
    app.post('/users', (req, res)=>{ // método post
    
        res.json(req.body); // vai exibir os campos enviados via post na solicitação
    
    });

}