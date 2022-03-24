module.exports = {

    user: (app, req, res)=>{

        //req.assert vai verificar o primeiro parametro e exibir a mensagem passada no segundo parametro. Utiliza funçoes pra realizar checagens.
        req.assert('name', 'O nome é obrigatório.').notEmpty();
        req.assert('email', 'Preencha o campo de email corretamente.').notEmpty().isEmail();

        let errors = req.validationErrors();
        
        // se existirem erros, mostra o erro e retorna falso pra parar a inserção de dados
        if (errors) {

            app.utils.error.send(errors, req, res);
            return false;

        } else {

            return true;
        }

    }

}