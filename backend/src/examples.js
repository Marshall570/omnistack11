const express = require('express')

const app = express()
app.use(express.json())     // informar EXPRESS que BODY = JSON


/**
 * Recurso = Literalmente um recuros
 * Rota = Caminho para o front-end
 */


/**
 *   MÉTODOS HTTP:
 *
 * GET: BUSCA dado no back-end
 * POST: ENVIA dado para o back-end
 * PUT: ATUALIZA dado no back-end
 * DELETE: DELETA dado no back-end
 */


/**
 * TIPOS DE PARÂMETROS
 * 
 * QUERY Params: Parâmetros nomeados enviados na rota após o "?", servindo como FILTROS, PAGINAÇÃO ETC.
 * ROUTE Params: Parâmetros utilizados para IDENTIFICAR 
 * Request BODY: Corpo da requisição utilizado para MODIFICAR recursos
 */


/**
 * USANDO BANCO DE DADOS
 * 
 * DRIVER: Query clássico SQL
 * QUERY BUILDER: Query via JavaScript
 */


app.post('/users', (request, response) => {
    // return response.send('Hello, World!')        // Response ruim

    const params = request.query
    const id = request.params
    const body = request.body
    console.log(params)         //  <ROTA>?param=valor
    console.log(id)             //  <ROTA>/valor
    console.log(body)           //  <ROTA>

    return response.json({                          // Response recomendado (usando JSON)
        evento: "Semana OmniStack 11",
        aluno: "Cleitinho"
    })
})
app.listen(3333)
