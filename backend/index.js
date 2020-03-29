const express = require('express');

const app = express();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET    :  Buscar/listar uma informação do back-end
 * POST   :  Criar uma informação no back-end
 * PUT    :  Alterar uma informação no back-end
 * DELETE :  Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params : Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 *   http://localhost:3333/users?name=Vagner
 *   http://localhost:3333/users?page=2&name=Vagner&age=26
 * Route Params : Parâmetros utilizados para identificar recursos 
 *   http://localhost:3333/users/2
 * Request Body : 
 */

app.get('/users/:id', (request, response) => {
    const params = request.params;
    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Vagner H.'
    });
});

app.listen(3333);
