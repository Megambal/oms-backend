// src/app.js
const fastify = require('fastify')({ logger: true })

fastify.register(require('./modules/orders/order.routes'))

fastify.get('/health', async () => {
  return { status: 'ok' }
})

module.exports = fastify