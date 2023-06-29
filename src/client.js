const mongoUrl = require('./bdPassword/mongoUrl')

const { MongoClient, ServerApiVersion } = require('mongodb')

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongoUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

module.exports = client