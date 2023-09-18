import { prisma } from '@/lib/prisma'
import { type FastifyReply, type FastifyRequest } from 'fastify'

export const getAllPrompts = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const prompts = await prisma.prompt.findMany()

    return await reply.status(200).send(prompts)
  } catch (error) {
    if (error instanceof Error) reply.status(400).send({ message: error.message })
    throw error
  }
}
