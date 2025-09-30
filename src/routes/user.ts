import type { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';

async function userRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return { users: ['user1', 'user2'] };
    });
}

export default userRoutes;
