# Kafka Application

## Architecture Diagram

The following diagram shows the overall architecture of the application:

![alt text](./images/image.png)

This is how producer adds new messages to partitions and consumers gets the messages:

![alt text](image.png)

## Start Kafka, Producer and Consumers

Start Zookeper Container and expose PORT 2181. Start Kafka Container, expose PORT 9092 and setup ENV variables.

```bash
docker compose up -d
```

Run Multiple Consumers:
```bash
node consumer.js <GROUP_NAME>
```

Create Producer:
```bash
node producer.js
```

![alt text](./images/image-1.png)

## Results

![alt text](./images/image-2.png)