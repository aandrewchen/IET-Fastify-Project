const collection = fastify.mongo.db.collection('users')

async function getAllUsers(request, reply) {
    try {
        const result = await collection.find().toArray();
        return result;
    } catch (error) {
        reply.status(500).send(error);
    }
}

async function getUserById(request, reply) {
    try {
        const result = await collection.findOne({ _id: new fastify.mongo.ObjectId(request.params.id) });
        if (result === null) {
            reply.status(404).send({ message: 'User not found' });
        } else {
            reply.send(result);
        }
    } catch (error) {
        reply.status(500).send(error);
    }
}

async function createUser(request, reply) {
    try {
        const result = await collection.insertOne(request.body);
        reply.status(201).send(result.ops[0]);
    } catch (error) {
        reply.status(500).send(error);
    }
}

async function updateUser(request, reply) {
    try {
        const result = await collection.findOneAndUpdate(
            { _id: new fastify.mongo.ObjectId(request.params.id) },
            { $set: request.body },
            { returnOriginal: false }
        );
        if (result.value === null) {
            reply.status(404).send({ message: 'User not found' });
        } else {
            reply.send(result.value);
        }
    } catch (error) {
        reply.status(500).send(error);
    }
}

async function deleteUser(request, reply) {
    try {
        const result = await collection.findOneAndDelete({ _id: new fastify.mongo.ObjectId(request.params.id) });
        if (result.value === null) {
            reply.status(404).send({ message: 'User not found' });
        } else {
            reply.send(result.value);
        }
    } catch (error) {
        reply.status(500).send(error);
    }
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}