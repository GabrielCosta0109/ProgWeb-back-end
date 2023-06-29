const client = require('../client')

// FILTROS DA OITAVA CONSULTA.

const srgaCovid = {$and:[{SUPORT_VEN:1},{CLASSI_FIN:5}]}
const sragOutrosTip = {$and:[{SUPORT_VEN:1},{CLASSI_FIN:{$in :[1,2,3,4] }}]}


async function Query8() {

    try {
      await client.connect();
      const db = client.db("ProgWeb").collection("Dados2022")

      const findFilter5 = await db.countDocuments(srgaCovid)
      const findAll = await db.countDocuments(sragOutrosTip)

      return (
        [findFilter5, findAll]
      )
  
    } finally {
      await client.close();
    }
  }
  
module.exports = Query8