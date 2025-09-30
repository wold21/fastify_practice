import type { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';

async function clubRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/clubs', async (request: FastifyRequest, reply: FastifyReply) => {
        return { clubs: ['club1', 'club2'] };
    });
}

export default clubRoutes;
