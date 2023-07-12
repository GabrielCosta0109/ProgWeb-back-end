const client = require('../client')

// FILTROS DA NONA CONSULTA

const totalNosocomialSim = {NOSOCOMIAL:1}
const totalNosocomialNao = {NOSOCOMIAL:2}


async function Query9() {

    try {
      await client.connect();
      const db = client.db("ProgWeb").collection("Dados2022")

      const findFilter1 = await db.find(totalNosocomialSim).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()
      const findAll = await db.find(totalNosocomialNao).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()

      return (
        [findFilter1, findAll]
      )
  
    } finally {
      await client.close();
    }
  }
  
module.exports = Query9
