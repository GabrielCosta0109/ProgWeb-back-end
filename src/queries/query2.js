const client = require('../client')

// FILTROS DA SEGUNDA CONSULTA
const noVacOutrosSrag = { $and: [{ VACINA_COV: 2}, {CLASSI_FIN: {$in :[1,2,3,4]}}]};
const noVacCovSrag = { $and: [{ VACINA_COV: 2}, {CLASSI_FIN: 5}]}
const noVacNoEspcSrag = { $and: [{ VACINA_COV: 2}, {CLASSI_FIN: null}]}
const vac = { VACINA_COV: 1}
const noEspcVac = { VACINA_COV: {$in :[null,9] }}

async function run() {

    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      const db = client.db("ProgWeb").collection("Dados2022")
      
      const findFilter5 = await db.find(noEspcVac).toArray((err, documents) => {
          if (err) {
            console.error('Erro ao buscar documentos:', err);
            client.close();
            return;
          }
      })

      const findFilter2 = await db.countDocuments(noVacOutrosSrag)
      const findFilter3 = await db.countDocuments(noVacCovSrag)
      const findFilter1 = await db.countDocuments(vac)
      const findFilter4 = await db.countDocuments(noVacNoEspcSrag)
      const findAll = await db.countDocuments({})
      // const toArray = await findAll.toArray()
      
      console.log(findFilter5.length, findFilter1, findFilter2, findFilter3,findFilter4, findAll)
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
  
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
}

run()