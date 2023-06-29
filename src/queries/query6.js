const client = require('../client')
// FILTROS DA SEXTA CONSULTA.

const pessMenor20 = {$and: [{NU_IDADE_N: { $lte: 20 }}, {UTI:1} ]}
const pessMaior20 = {$and: [{NU_IDADE_N: { $gte: 20 }}, {UTI:1} ]}

async function Query6() {

    try {
      await client.connect();
      const db = client.db("ProgWeb").collection("Dados2022")

      const findFilter5 = await db.countDocuments(pessMenor20)
      const findAll = await db.countDocuments(pessMaior20)

      return (
        [findFilter5, findAll]
      )
  
    } finally {
      await client.close();
    }
  }
  
module.exports = Query6