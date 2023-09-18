import { type FastifyInstance } from 'fastify'
import { home } from './controllers/home'
import { getAllPrompts } from './controllers/prompts'
import { getAllVideos, uploadVideo } from './controllers/videos'

export const appRoutes = async (app: FastifyInstance) => {
  app.get('/', home)
  app.get('/prompts', getAllPrompts)
  app.get('/videos', getAllVideos)
  app.post('/videos', uploadVideo)
}
