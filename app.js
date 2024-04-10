import Fastify from 'fastify';
import dbConnector from './src/db-connector.js';
import userRoutes from './src/routes/user.routes.js'

const fastify = Fastify({
    logger: true
});

fastify.register(dbConnector);

fastify.register(userRoutes, { prefix: '/api/v1/users'});

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