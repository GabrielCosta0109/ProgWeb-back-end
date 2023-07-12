const client = require('../client')

// FILTROS DA TERCEIRA CONSULTA

const simVacCovid = { VACINA_COV: 1}
const tiposSragSemCov = { CLASSI_FIN: {$in: [1,2,3,4] }}

async function Query3() {

  try {
    await client.connect();
    const db = client.db("ProgWeb").collection("Dados2022")

    const findFilter1 = await db.find(pessVacCovSimSrag).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()
    const findFilter2 = await db.find(tiposSragSemCov).project({ SG_UF_NOT: 1, CS_SEXO: 1, _id:0 }).toArray()
    
   return(
    [findFilter1, findFilter2]
   )
    

  } finally {
    await client.close();
  }
}

module.exports = Query3