- how to work with  havy task exchange or expensive task exchange

- open terminal 1 and run this command
```bash
node worker.js
```

- open terminal 2 and run this command
```bash
node worker.js 'exit'
```

- open terminal 3 and run this command
```bash
node task.js
```

- terminal 1 and terminal 2 will show the result
- terminal 2 will exit if this any error happen and send message to terminal 1 broker
- so this is a example of havy task exchange or expensive task exchange working any broker will not work so handle another broker send message store and till hold this message in rabbitmq queue and process it and send result to receivers