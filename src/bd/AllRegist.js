const client = require('../client')

async function run() {

    try {
      await client.connect();

      const db = client.db("ProgWeb").collection("Dados2022")
      
      const All = await db.find({ SG_UF : 'SE'}).toArray((err, documents) => {
        if (err) {
            console.error('Erro ao buscar documentos:', err);
            client.close();
            return;
        }
        else {
            resolve(documents)
        }
      }) 

      return All

    } finally {
      await client.close();
    }
}

module.exports = run