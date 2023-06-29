const client = require('../client')

// FILTROS DA TERCEIRA CONSULTA.

const pessVacCovSimSrag= {$and: [{ VACINA_COV: 1}, {CLASSI_FIN: {$in :[1,2,3,4] }}]}

async function Query3() {

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = client.db("ProgWeb").collection("Dados2022")

    const findFilter1 = await db.countDocuments(pessVacCovSimSrag)
    const findFilter2 = await db.countDocuments({})
    
   return(
    [findFilter1, findFilter2]
   )
    

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = Query3