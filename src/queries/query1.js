const client = require('../client')

// FILTROS DA PRIMEIRA CONSULTA

const pesContatoAni = {$and: [{AVE_SUINO:1}]}
const pesNoContatoAni = {$and: [{AVE_SUINO:2}]}

async function Query1() {

    try {
      await client.connect();
      const db = client.db("ProgWeb").collection("Dados2022")

      const findFilter5 = await db.find(pesContatoAni).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()
      const findAll = await db.find(pesNoContatoAni).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()

      return (
        [findFilter5, findAll]
      )
  
    } finally {
      await client.close();
    }
  }
  
module.exports = Query1