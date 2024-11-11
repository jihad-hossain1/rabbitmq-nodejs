const amqp = require("amqplib");

async function task() {
    try {
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();

        const queue = "expens_task_queue";

        const msg = process.argv.slice(2).join(" ") || "hello world";

        channel.assertQueue(queue, { durable: true });

        channel.sendToQueue(queue, Buffer.from(msg), { persistent: true });

        console.log(`[x] sent %s`, msg);

        setTimeout(() => {
            connection.close();
            process.exit(0);
        }, 500);
    } catch (error) {
        console.error(error);
    }
}

task();
