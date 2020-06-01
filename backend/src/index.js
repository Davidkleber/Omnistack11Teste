const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * app.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);
    
    return response.json({
        evento: 'Semana omnistack 11.0',
        aluno: 'David Bastos'
    });
}); 

 */


 /**
  * Tipos de parâmtros:
  * 
  * Query params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
    * app.get('/users/:id', (request, response) => {
        const params = request.params;

        console.log(params);

        return response.json({
            evento: 'Semana omnistack 11.0',
            aluno: 'David Bastos'
        });
    }); 

  * Route Params: Parâmtros utilizados para identificar recursos
    * http://localhost:3333/users/1   (usuário de id 1)
    * app.get('/users/:id', (request, response) => {
        return response.json({
            evento: 'Semana omnistack 11.0',
            aluno: 'David Bastos'
        });
    });

   * Request Body:Corpo da requisição, utilizado para criar ou alterar recursos.
   * SQL: Mysql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   * 
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
  */
 /**
app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana omnistack 11.0',
        aluno: 'David Kleber'
    });
}); 

*/