import { type FastifyReply, type FastifyRequest } from 'fastify'

export const home = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    return await reply.status(200).send({
      message: 'upload.ai API'
    })
  } catch (error) {
    if (error instanceof Error) reply.status(400).send({ message: error.message })
    throw error
  }
}
