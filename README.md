
- Read Main Documentation in [RabbitMQ](https://www.rabbitmq.com/tutorials/tutorial-one-javascript)
- open terminal and open docker desktop app
- run this command for init docker container
```bash
# latest RabbitMQ 4.0.x
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:4.0-management
```

- open browser and go to http://localhost:15672

- open terminal and run this command

```bash
 yarn 
```
or
```bash
 npm install
```

- callback pattern
[callback](callback/jest.md)

- promise pattern
[asynchronous](asynchronous/jest.md)

- fanout
[fanout](fanout/jest.md)

- direct exchange
[direct](direct/jest.md)

- expensivetask exchange
[expensivetask](expensivetask/jest.md)

