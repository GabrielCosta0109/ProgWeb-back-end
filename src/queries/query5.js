const client = require('../client')

// FILTROS DA QUINTA CONSULTA.

const menor10Recuperado = {$and:[{NU_IDADE_N:{$lte:10}}, {EVOLUCAO:1}]}
const evoMelhora = {$and:[{NU_IDADE_N:{$gte:10}}, {EVOLUCAO:1}]}


async function Query5() {

  try {
    await client.connect();
    const db = client.db("ProgWeb").collection("Dados2022")

    const findFilter5 = await db.find(menor10Recuperado).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()
    const findAll = await db.find(evoMelhora).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()

    return (
      [findFilter5, findAll]
    )

  } finally {
    await client.close();
  }
}

module.exports = Query5