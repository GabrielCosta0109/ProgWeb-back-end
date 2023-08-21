const client = require('./clienteMaps');

async function AllMap(latitude, longitude) {

    try {
        await client.connect();

        const db = client.db("coords").collection("AllCoords")

        const All = await db.find().toArray((err, documents) => {
            if (err) {
                console.error('Erro ao buscar coordenadas:', err);
                client.close();
                return;
            }
            else {
                resolve(documents)
            }
        })

        return ({
            'code': 200,
            'data': All,
        })
    }
    catch {
        return ({
            'code': 401,
            'message': 'Erro, não foi possível encontrar!'
        })
    }
    finally {
        await client.close();
    }
}


module.exports = AllMap