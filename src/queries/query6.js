const client = require('../client')

// FILTROS DA SEXTA CONSULTA.

const pessMenor20 = { NU_IDADE_N: { $lte: 20 } }
const pessMaior20 = { NU_IDADE_N: { $gt: 20 } }
const interUtiSim = { UTI: 1 }

async function run() {

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const findFilter5 = await db.find(pessMenor20).toArray((err, documents) => {
            if (err) {
                console.error('Erro ao buscar documentos:', err);
                client.close();
                return;
            }
        })
        // Send a ping to confirm a successful connection
        const db = client.db("ProgWeb").collection("Dados2022")
        const findFilter1 = await db.countDocuments(pessMenor20)
        const findFilter2 = await db.countDocuments(pessMaior20)
        const findFilter3 = await db.countDocuments(interUtiSim)
        // const toArray = await findAll.toArray()

        console.log(findFilter1, findFilter2, findFilter3)
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run()