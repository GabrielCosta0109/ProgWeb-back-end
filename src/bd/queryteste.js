const client = require('../client')

// FILTROS DA PRIMEIRA CONSULTA.

const pesContatoAni = { AVE_SUINO: 1 }

async function run() {

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const db = client.db("ProgWeb").collection("Dados2022")
        const findFilter5 = await db.find({ SG_UF: "SE" }).toArray((err, documents) => {
            if (err) {
                console.error('Erro ao buscar documentos:', err);
                client.close();
                return;
            } else {
                resolve(documents)
            }
        })

        //console.log(findFilter5)
        //console.log("Pinged your deployment. You successfully connected to MongoDB!");

        return findFilter5

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

module.exports = run