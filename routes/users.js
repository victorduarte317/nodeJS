let NeDB = require('nedb');

let db = new NeDB({ // instancia NeDB
    filename:'users.db', // nome da pasta que vai ser criada
    autoload:'true' // mao na roda
});

module.exports = app =>{

    let route = app.route("/users");

    route.get((req, res)=>{ // método get (padrao)

        db.find({}).sort({name:1}).exec((err, users)=>{ // db.find procura na database, array vazio pq nao tem alvo ele busca todos

            if (err) {
                
                app.utils.error.send(err, req, res);

            } else {

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ // vai responder com json (express) no users
            
                users // deixar só users é como se fosse "users: users"

                });

            }

        });

    });
    
    route.post((req, res)=>{ // método post

        if (!app.utils.validator.user(app, req, res)) return false;

        // salvar o registro dentro do banco
        db.insert(req.body, (err, user)=>{ // objeto que vai ser salvo, funçao (erro, registro salvo no banco)

            if (err) { // se der erro
                
                app.utils.error.send(err, req, res); // app.pasta.arquivo.metodo(parametros), como o code aqui seria 400 e la na funçao ja é 400, nao precisa passar

            }else {
                res.status(200).json(user); // se nao der erro, retorna pro servidor o codigo de sucesso na conexao
                // e com json(user) ele retorna o id (hash) do usuario
            }       
        })
    
    });

    let routeId = app.route("/users/:id");

    routeId.get((req, res) =>{

        db.findOne({_id:req.params.id}).exec((err, user) =>{
    
            if (err) {

                app.utils.error.send(err, req, res);    
            } else {

                res.status(200).json(user);
            }

    }); 

});

    routeId.put((req, res) =>{ // usando put, pra colocar os dados la, usado pra alterar

        if (!app.utils.validator.user(app, req, res)) return false;

        db.update({_id:req.params.id}, req.body, err =>{ // update recebe o mesmo filtro pra pegar o id, recebe os dados (nesse caso, req.body e a função de callback, nesse caso, o error
    
            if (err) {

                app.utils.error.send(err, req, res);    
            } else {

                res.status(200).json(Object.assign(req.params, req.body));
            }
        });
    }); 

    routeId.delete((req, res)=>{
        
        // essa estrutura é reusada varias vezes: recebe o id no req params, atribui à _id, trata o erro na arrow function com if
        db.remove({_id:req.params.id}, {}, err =>{

            if (err) {
                app.utils.error.send(err, req, res);    
            } else {

                res.status(200).json(req.params); // req params aqui pra retornar qual foi o id excluido
            }

        });

    });

}
