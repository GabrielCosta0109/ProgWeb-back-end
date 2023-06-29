const client = require('../client')

// FILTROS DA NONA CONSULTA

const totalNosocomialSim = {$and: [{}, {NOSOCOMIAL:1}]}
const totalNosocomialNao = {$and: [{}, {NOSOCOMIAL:2}]}


async function Query9() {

    try {
      await client.connect();
      const db = client.db("ProgWeb").collection("Dados2022")

      const findFilter1 = await db.countDocuments(totalNosocomialSim)
      const findAll = await db.countDocuments(totalNosocomialNao)

      return (
        [findFilter1, findAll]
      )
  
    } finally {
      await client.close();
    }
  }
  
module.exports = Query9
