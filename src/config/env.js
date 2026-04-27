import envSchema from 'env-schema'

const schema = {
  type: 'object',
  required: ['APP_PORT', 'DB_HOST', 'DB_NAME', 'DB_USER', 'JWT_SECRET'],
  properties: {
    NODE_ENV: {
      type: 'string',
      default: 'development'
    },
    APP_PORT: {
      type: 'number',
      default: 3000
    },
    APP_HOST: {
      type: 'string',
      default: '0.0.0.0'
    },

    // DB
    DB_HOST: { type: 'string' },
    DB_PORT: { type: 'number', default: 5432 },
    DB_NAME: { type: 'string' },
    DB_USER: { type: 'string' },
    DB_PASSWORD: { type: 'string' },

    // Auth
    JWT_SECRET: { type: 'string' },

    // Logging
    LOG_LEVEL: {
      type: 'string',
      default: 'info'
    }
  }
}

export default function loadConfig() {
  const config = envSchema({
    schema,
    dotenv: true
  })

  return config
}