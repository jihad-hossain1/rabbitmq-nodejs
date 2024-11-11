const amqp = require('amqplib');

async function send(){
       try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();


        const queue = 'hello';
        const message = 'hello world async';

        await channel.assertQueue(queue, {durable: false});

        channel.sendToQueue(queue, Buffer.from(message))

        console.log(`[x] sent ${message}`)


        setTimeout(() => {
            connection.close();
            process.exit()
        }, 500);
       } catch (error) {
        console.error(error)
       } 
}


send()


