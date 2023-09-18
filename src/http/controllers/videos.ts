import { prisma } from '@/lib/prisma'
import { type FastifyReply, type FastifyRequest } from 'fastify'

export const getAllVideos = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const videos = await prisma.video.findMany()

    return await reply.status(200).send(videos)
  } catch (error) {
    if (error instanceof Error) reply.status(400).send({ message: error.message })
    throw error
  }
}

export const uploadVideo = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const videos = await prisma.video.findMany()

    return await reply.status(200).send(videos)
  } catch (error) {
    if (error instanceof Error) reply.status(400).send({ message: error.message })
    throw error
  }
}
