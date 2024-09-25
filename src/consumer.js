const {kafka} = require('./client');

async function init() {
    const consumer = kafka.consumer({groupId: "rider-group"});
    
    console.log("Connecting to consumer...");
    await consumer.connect();
    console.log("Connected to consumer");

    await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            console.log(`Received message on topic: ${topic} and partition: ${partition}`);
            console.log(`Received message: ${message.value.toString()}`);
        }
    })

}

init();