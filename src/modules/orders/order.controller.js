// src/modules/orders/order.controller.js
const service = require('./order.service')

async function create(req, reply) {
  const order = await service.createOrder(req.body)
  return reply.send(order)
}

async function list(req, reply) {
  const orders = await service.getOrders()
  return reply.send(orders)
}

module.exports = { create, list }