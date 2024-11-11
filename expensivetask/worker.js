const amqp = require("amqplib");

async function worker() {
    try {
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();

        const queue = "expens_task_queue";

        channel.assertQueue(queue, { durable: true });
        channel.prefetch(1);

        console.log(
            `[*] waiting for messages in $s. To exit press cntrl+c`,
            queue,
        );

        channel.consume(
            queue,
            (msg) => {
                const secs = msg.content.toString().split(".").length - 1;

                console.log(`[x] received %s`, msg.content.toString());

                
                const exit = process.argv.slice(2).join(" ");
                console.log("exit", exit);

                if (exit) {
                    console.log("exiting...");
                    process.exit(0);
                }

               
                setTimeout(() => {
                    console.log(` [x] Done`);
                    channel.ack(msg);
                }, secs * 1000);
            },
            { noAck: false },
        );
    } catch (error) {
        console.error(error);
    }
}

worker();
