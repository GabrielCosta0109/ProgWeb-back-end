const client = require('../client')

// FILTROS DA QUARTA CONSULTA

const pessMaior50Obito = { $and: [{NU_IDADE_N: {$gte: 50}}, {EVOLUCAO: 2}]}
const pessMenor50Obito = { $and: [{NU_IDADE_N: {$lte: 50}}, {EVOLUCAO: 2}]}


async function Query4() {

    try {
        await client.connect();
        const db = client.db("ProgWeb").collection("Dados2022")

        const findFilter1 = await db.find(pessMaior50Obito).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()
        const findFilter2 = await db.find(pessMenor50Obito).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()
        const findFilter3 = await db.countDocuments({})

        return(
            [findFilter1, findFilter2, findFilter3]
        )

    } finally {
        await client.close();
    }
}
module.exports = Query4