import userController from '../controllers/user.controller.js';

const UserSchema = {
    type: 'object',
    required: ['firstName', 'lastName', 'email'],
    properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string', format: 'email' },
        role: { type: 'string', enum: ['Admin', 'Project manager', 'Team member'], default: 'Team member' },
    },
};

async function routes(fastify, options, done) {
    fastify.get("/", userController.getAllUsers);
    fastify.get("/:id", userController.getUserById);
    fastify.post("/", { schema: UserSchema }, userController.createUser);
    fastify.put("/:id", { schema: UserSchema }, userController.updateUser);
    fastify.delete("/:id", userController.deleteUser);

    done();
}

export default routes;