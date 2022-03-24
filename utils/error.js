module.exports = {

    send: (err, req, res, code = 400) =>{ // função que vai exportar os parametros

        console.log(`error: ${err}`);
        res.status(code).json({ // responde o erro pro servidor
        error: err // error é nativo JSON, vai receber a variavel err do if
        
        });

    }

};