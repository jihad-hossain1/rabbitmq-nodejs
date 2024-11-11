const amqp = require("amqplib");

const emitLog = async () => {
    try {
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();

        const exchange = "direct_logs";
        const args = process.argv.slice(2);

        console.log("Args: ", args);

        const msg = args.slice(1).join(" ") || "hello world!";
        const severity = args.length > 0 ? args[0] : "info";

        await channel.assertExchange(exchange, "direct", { durable: false });

        channel.publish(exchange, severity, Buffer.from(msg));

        console.log(` [x] sent %s: "%s"`, severity,msg);

        setTimeout(() => {
            connection.close();
            process.exit(0);
        }, 500);
    } catch (error) {
        console.log(error);
    }
};

emitLog();
