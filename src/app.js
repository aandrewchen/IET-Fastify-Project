const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');
require('dotenv').config();

// Import my routes
const userRoutes = require('./routes/user.routes');

const username = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;

// Connect to my database
mongoose.connect(`mongodb://${username}:${password}@localhost:27018/activities?authSource=admin`)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Start my server
fastify.register(userRoutes, { prefix: '/api/v1/users' });

const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 5000);
        fastify.log.info(`Server is running on port ${fastify.server.address().port}`);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();