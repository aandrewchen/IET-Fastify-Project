const User = require('../models/user.model');

async function getAllUsers(request, reply) {
    try {
        reply.send("Not implemented yet");
    } catch (error) {
        reply.status(500).send(error);
    }
}

async function getUserById(request, reply) {
    try {
        reply.send("Not implemented yet");
    } catch (error) {
        reply.status(500).send(error);
    }
}

async function createUser(request, reply) {
    try {
        reply.send("Not implemented yet");
    } catch (error) {
        reply.status(500).send(error);
    }
}

async function updateUser(request, reply) {
    try {
        reply.send("Not implemented yet");
    } catch (error) {
        reply.status(500).send(error);
    }
}

async function deleteUser(request, reply) {
    try {
        reply.send("Not implemented yet");
    } catch (error) {
        reply.status(500).send(error);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}