const client = require('../client')

// FILTROS DA SETIMA CONSULTA

const supUtiInvaMelhora = {$and: [{ UTI: 1 }, {EVOLUCAO:1}, { SUPORT_VEN: 1 }]}
const supUtiNaoInvaMelhora = {$and: [{ UTI: 1 },{EVOLUCAO:1},{ SUPORT_VEN:2}]}

async function Query7() {

    try {
      await client.connect();
      const db = client.db("ProgWeb").collection("Dados2022")

      const findFilter5 = await db.find(supUtiInvaMelhora).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()
      const findAll = await db.find(supUtiNaoInvaMelhora).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()

      return (
        [findFilter5, findAll]
      )
  
    } finally {
      await client.close();
    }
  }
  
module.exports = Query7