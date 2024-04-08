import userController from '../controllers/user.controller.js';

async function routes(fastify, options, done) {
    fastify.get("/", userController.getAllUsers);
    fastify.get("/:id", userController.getUserById);
    fastify.post("/", userController.createUser);
    fastify.put("/:id", userController.updateUser);
    fastify.delete("/:id", userController.deleteUser);

    done();
}

export default routes;