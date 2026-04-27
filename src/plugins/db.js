import fp from 'fastify-plugin'
import pkg from 'pg'

const { Pool } = pkg

async function dbPlugin(fastify) {
  const config = fastify.config

  const pool = new Pool({
    host: config.DB_HOST,
    port: config.DB_PORT,
    database: config.DB_NAME,
    user: config.DB_USER,
    password: config.DB_PASSWORD
  })

  // test connection
  try {
    await pool.query('SELECT 1')
    fastify.log.info('✅ Database connected')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  // decorate fastify instance
  fastify.decorate('db', pool)
}

export default fp(dbPlugin)