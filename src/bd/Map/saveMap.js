const client = require('./clienteMaps');

async function getMap(latitude, longitude) {

  try {
    await client.connect();
    
    const db = client.db("coords").collection("AllCoords")
    
    await db.insertOne({
      latitude: latitude,
      longitude: longitude,
    });

    return ({
      code:201,
      message:'Enviado com sucesso!',
    })

  }
  catch {
    return ({
        code:401,
        message:'Erro, não foi possível criar!',
      })
  }
  finally {
    await client.close();
  }
}

module.exports = getMap