const amqp = require("amqplib");

const emitLog = async () => {
    try {
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();

        const exchange = "logs";
        const msg = process.argv.slice(2).join(" ") || "hello world!";

        channel.assertExchange(exchange, "fanout", { durable: false });
        channel.publish(exchange, "", Buffer.from(msg));

        console.log(` [x] sent ${msg}`);

        setTimeout(() => {
            connection.close();
            process.exit(0);
        }, 500);
    } catch (error) {
        console.log(error);
    }
};

emitLog();
