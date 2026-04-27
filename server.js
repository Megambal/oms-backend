import app from './app.js'

const start = async () => {
  try {
    await app.listen({
      port: app.config.APP_PORT,
      host: app.config.APP_HOST
    })

    console.log(`🚀 Server running on ${app.config.APP_PORT}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()