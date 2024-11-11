const amqp = require('amqplib/callback_api')


amqp.connect('amqp://localhost',(err0,conn)=>{
    if(err0) throw err;

    conn.createChannel((err1,channel)=>{
        if(err1) throw err1;

        const queue = 'hello';
        const msg = 'hello world'

        channel.assertQueue(queue, {durable: false})
        channel.sendToQueue(queue,Buffer.from(msg))

        console.log(`[x] sent ${msg}`)
    })


    setTimeout(()=>{
        conn.close();
        process.exit()
    },500)
})