import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from '@fastify/mongodb'
import dotenv from 'dotenv'

dotenv.config();

const username = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;

async function dbConnector (fastify, options) {
  fastify.register(fastifyMongo, {
    url: `mongodb://${username}:${password}@localhost:27017`
  })
}

export default fastifyPlugin(dbConnector)