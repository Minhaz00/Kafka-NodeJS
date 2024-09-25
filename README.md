# Kafka Application

## Architecture Diagram

![alt text](./images/image.png)

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