const client = require('../client')

// FILTROS DA QUARTA CONSULTA.

const pessMaior50Obito = { $and: [{NU_IDADE_N: {$gte: 50}}, {EVOLUCAO: 2}]}
const pessMenor50Obito = { $and: [{NU_IDADE_N: {$lte: 50}}, {EVOLUCAO: 2}]}


async function Query4() {

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const db = client.db("ProgWeb").collection("Dados2022")

        const findFilter1 = await db.countDocuments(pessMaior50Obito)
        const findFilter2 = await db.countDocuments(pessMenor50Obito)
        const findFilter3 = await db.countDocuments({})

        return(
            [findFilter1, findFilter2, findFilter3]
        )

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
module.exports = Query4