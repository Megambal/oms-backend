// src/queue/order.queue.js
const { Queue } = require('bullmq')
const Redis = require('ioredis')

const connection = new Redis(process.env.REDIS_URL)

const orderQueue = new Queue('orderQueue', { connection })

async function sendOrderNotification(order) {
  await orderQueue.add('notify', order)
}

module.exports = { orderQueue, sendOrderNotification }