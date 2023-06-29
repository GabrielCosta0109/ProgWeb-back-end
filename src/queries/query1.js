const client = require('../client')

// FILTROS DA PRIMEIRA CONSULTA.

const pesContatoAni = {$and: [{AVE_SUINO:1}]}

async function Query1() {

    try {
      await client.connect();
      const db = client.db("ProgWeb").collection("Dados2022")

      const findFilter5 = await db.countDocuments(pesContatoAni)
      const findAll = await db.countDocuments({})

      return (
        [findFilter5, findAll]
      )
  
    } finally {
      await client.close();
    }
  }
  
module.exports = Query1