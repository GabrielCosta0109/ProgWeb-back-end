const client = require('../client')

// FILTROS DA SETIMA CONSULTA.

const supUtiInvaMelhora = {$and: [{ UTI: 1 }, {EVOLUCAO:1}, { SUPORT_VEN: 1 }]}
const supUtiNaoInvaMelhora = {$and: [{ UTI: 1 },{EVOLUCAO:1},{ SUPORT_VEN:2}]}

async function Query7() {

    try {
      await client.connect();
      const db = client.db("ProgWeb").collection("Dados2022")

      const findFilter5 = await db.countDocuments(supUtiInvaMelhora)
      const findAll = await db.countDocuments(supUtiNaoInvaMelhora)

      return (
        [findFilter5, findAll]
      )
  
    } finally {
      await client.close();
    }
  }
  
module.exports = Query7