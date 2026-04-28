// src/modules/orders/order.service.js
const prisma = require('../../plugins/prisma')
const { sendOrderNotification } = require('../../queue/order.queue')

async function createOrder(data) {
  const order = await prisma.order.create({
    data: {
      customer: data.customer,
      total: data.total,
      status: 'CREATED'
    }
  })

  // async job
  await sendOrderNotification(order)

  return order
}

async function getOrders() {
  return prisma.order.findMany()
}

module.exports = { createOrder, getOrders }