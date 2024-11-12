- how to work with fanout exchange

- the fanout exchange is a type of exchange that sends messages to all queues that are bound to it

- open terminal 1 and run this command
```bash
node receive.js
```

- open terminal 2 and run this command
```bash
node receive.js
```

- open terminal 3 and run this command
```bash
node receive.js
```

- open terminal 4 and run this command
```bash
node receive.js
```

- open terminal 5 and run this command
```bash
node emitlog.js 'i can notifiy for everyone'
```

