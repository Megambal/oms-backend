import Fastify from 'fastify'
import loadConfig from './config/env.js'
import dbPlugin from './plugins/db.js'


const config = loadConfig()

const app = Fastify({
  logger: {
    level: config.LOG_LEVEL
  }
})

// make config available everywhere
app.decorate('config', config)

app.register(dbPlugin)

export default app