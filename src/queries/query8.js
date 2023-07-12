const client = require('../client')

// FILTROS DA OITAVA CONSULTA

const srgaCovid = {$and:[{SUPORT_VEN:1},{CLASSI_FIN:5}]}
const sragOutrosTip = {$and:[{SUPORT_VEN:1},{CLASSI_FIN:{$in :[1,2,3,4] }}]}


async function Query8() {

    try {
      await client.connect();
      const db = client.db("ProgWeb").collection("Dados2022")

      const findFilter5 = await db.find(srgaCovid).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()
      const findAll = await db.find(sragOutrosTip).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()

      return (
        [findFilter5, findAll]
      )
  
    } finally {
      await client.close();
    }
  }
  
module.exports = Query8