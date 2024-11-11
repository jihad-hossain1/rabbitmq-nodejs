const amqp = require("amqplib");

const receive = async () => {
    try {
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();

        const exchange = "logs";

       await channel.assertExchange(exchange, "fanout", { durable: false });

        const q = await channel.assertQueue("", { exclusive: true });

        console.log(` [*] waiting for logs. to exit pross cntrl+c`);
        channel.bindQueue(q.queue, exchange, "");

        channel.consume(
            q.queue,
            (msg) => {
                console.log(` [x] %s`, msg.content.toString());
            },
            { noAck: true },
        );
    } catch (error) {
        console.log(error);
    }
};

receive();
