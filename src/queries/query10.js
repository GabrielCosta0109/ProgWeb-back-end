const client = require('../client')

// FILTROS DA DECIMA CONSULTA

const interDiabetesSim = {$and: [{ UTI: 1 }, {DIABETES:1}]}
const interDiabetesNao= {$and: [{ UTI: 1 }, {DIABETES:2}]}

async function Query10() {

    try {
      await client.connect();
      const db = client.db("ProgWeb").collection("Dados2022")

      const findFilter5 = await db.find(interDiabetesSim).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()
      const findAll = await db.find(interDiabetesNao).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()

      return (
        [findFilter5, findAll]
      )
  
    } finally {
      await client.close();
    }
  }
  
module.exports = Query10
