// src/modules/orders/order.routes.js
async function routes(fastify) {
    const controller = require('./order.controller')
  
    fastify.post('/orders', controller.create)
    fastify.get('/orders', controller.list)
  }
  
  module.exports = routes