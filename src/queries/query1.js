const client = require('../client')

// FILTROS DA PRIMEIRA CONSULTA

const pesContatoAni = {$and: [{AVE_SUINO:1}]}

async function run() {

    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      const findFilter5 = await db.find(pesContatoAni).toArray((err, documents) => {
        if (err) {
          console.error('Erro ao buscar documentos:', err);
          client.close();
          return;
        }
    })
      // Send a ping to confirm a successful connection
      const db = client.db("ProgWeb").collection("Dados2022")
      const findAll = await db.countDocuments({})
      // const toArray = await findAll.toArray()
  
      console.log(findFilter5.length, findFilter1, findFilter2, findFilter3, findFilter4, findAll)
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
  
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  
  run()