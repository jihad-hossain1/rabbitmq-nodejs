const amqp = require("amqplib");

async function receive() {
    try {
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();

        const queue = "hello";

        await channel.assertQueue(queue, { durable: false });

        console.log(
            `[*] waiting for messages in ${queue} , To exit press cntrl+c`,
        );

        channel.consume(
            queue,
            (msg) => {
                console.log(`[x] Received ${msg.content.toString()}`);
            },
            { noAck: true },
        );
    } catch (error) {
        console.error(error);
    }
}

receive();
