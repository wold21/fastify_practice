import type { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';

async function performanceRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/performance', async (request: FastifyRequest, reply: FastifyReply) => {
        return { performance: 'good' };
    });
}

export default performanceRoutes;
