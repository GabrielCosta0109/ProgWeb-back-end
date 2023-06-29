const client = require('../client')

// FILTROS DA OITAVA CONSULTA

const srgaCovid = { CLASSI_FIN: 5 }
const supUtiInva = { SUPORT_VEN: 1 }


async function run() {

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const findFilter5 = await db.find(srgaCovid).toArray((err, documents) => {
            if (err) {
                console.error('Erro ao buscar documentos:', err);
                client.close();
                return;
            }
        })
        // Send a ping to confirm a successful connection
        const db = client.db("ProgWeb").collection("Dados2022")
        const findFilter1 = await db.countDocuments(srgaCovid)
        const findFilter2 = await db.countDocuments(supUtiInva)
        // const toArray = await findAll.toArray()

        console.log(findFilter1, findFilter2)
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run()