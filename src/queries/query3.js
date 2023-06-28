const client = require('../client').default

// FILTROS DA TERCEIRA CONSULTA.

const vacSim = { VACINA_COV: 1 }
const tipoSragSemCov = { CLASSI_FIN: { $in: [1, 2, 3, 4] } }

async function run() {

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const findFilter5 = await db.find(vacSim).toArray((err, documents) => {
      if (err) {
        console.error('Erro ao buscar documentos:', err);
        client.close();
        return;
      }
    })
    // Send a ping to confirm a successful connection
    const db = client.db("ProgWeb").collection("Dados2022")
    const findFilter1 = await db.countDocuments(vacSim)
    const findFilter2 = await db.countDocuments(tipoSragSemCov)
    // const toArray = await findAll.toArray()

    console.log(findFilter1, findFilter2)
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run()