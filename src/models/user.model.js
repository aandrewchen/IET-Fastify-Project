import { Schema } from '@fastify/mongodb';
import { fastify } from 'fastify';

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    role: {
        type: String,
        enum: ["Admin", "Project manager", "Team member"],
        default: "Team member",
    },
});

const User = fastify.mongo.model('User', UserSchema);

export default User;