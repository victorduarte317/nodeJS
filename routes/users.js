let NeDB = require('nedb');

let db = new NeDB({ // instancia NeDB
    filename:'users.db', // nome da pasta que vai ser criada
    autoload:'true' // mao na roda
});

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
    
        // res.json(req.body); vai exibir os campos enviados via post na solicitação

        db.insert(req.body, (err, user)=>{

            if (err) {
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                })
            }else {

                res.status(200).json(user);
            }
        })
    
    });

}