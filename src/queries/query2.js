const client = require('../client')

// FILTROS DA SEGUNDA CONSULTA

const noVacCovid = { VACINA_COV: 2}
const tiposSragSemCov = { CLASSI_FIN: {$in: [1,2,3,4] }}

async function Query2() {

  try {
    await client.connect();
    const db = client.db("ProgWeb").collection("Dados2022")

    const findFilter5 = await db.countDocuments(noVacCovid)
    const findAll = await db.countDocuments(tiposSragSemCov)

    return (
      [findFilter5, findAll]
    )

  } finally {
    await client.close();
  }
}

module.exports = Query2

