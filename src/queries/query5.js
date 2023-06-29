const client = require('../client').default

// FILTROS DA QUINTA CONSULTA.

const menor10Recuperado = {$and:[{NU_IDADE_N:{$lte:10}}, {EVOLUCAO:1}]}
const evoMelhora = {$and:[{NU_IDADE_N:{$gte:10}}, {EVOLUCAO:1}]}


async function Query5() {

  try {
    await client.connect();
    const db = client.db("ProgWeb").collection("Dados2022")

    const findFilter5 = await db.countDocuments(menor10Recuperado)
    const findAll = await db.countDocuments(evoMelhora)

    return (
      [findFilter5, findAll]
    )

  } finally {
    await client.close();
  }
}

module.exports = Query5