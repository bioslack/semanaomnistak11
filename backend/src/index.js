const express = require("express");
const cors = require("cors");
const routes = require("./routes");


const app = express();

app.use(cors());
app.use(express.json())
app.use(routes)



/**
 * Métodos HTTP
 * GET: buscar uma informação no back end
 * POST: Criar uma informação no back end
 * PUT: Alterar uma informação no back end
 * DELETE: Deletar uma informação no back end
 */

 /**
  * Tipos de parâmetros
  * 
  * Query params: parâmetros nomeados enviados na rota após "?"
  * Route params: parâmetros utilizados para identificar recursos
  * Request body: 
  */


app.listen(3333);