const {kafka} = require('./client');

async function init(){
    const producer = kafka.producer();

    console.log('Connecting to producer...');
    await producer.connect();
    console.log('Connected to producer');

    await producer.send({
        topic: 'rider-updates',
        messages: [
            {
                partition: 0,
                key: "location_updates",
                value: JSON.stringify({
                    riderId: 123,
                    latitude: 40.71,
                    longitude: -74.00
                })
            }
        ]
    })
    console.log('Message sent successfully!');

    console.log('Disconnecting producer...');
    producer.disconnect();
    console.log('Producer disconnected');
}

init();