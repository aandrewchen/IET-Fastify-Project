import Fastify from 'fastify';
import fastifyMongo from '@fastify/mongodb'
import dotenv from 'dotenv'

import userRoutes from './src/routes/user.routes.js'

dotenv.config();

const username = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;

const fastify = Fastify({
    logger: true
});

fastify.register(fastifyMongo, {
    forceClose: true,
    url: `mongodb://${username}:${password}@localhost:27017/users?authSource=admin`
})

fastify.register(userRoutes, { prefix: '/api/v1/users '});

const start = async () => {
    try {
        await fastify.listen({port: 3000});
        console.log('Server is running');
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

start();