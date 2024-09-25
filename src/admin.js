const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Adming Connection Success...");

  console.log("Creating Topic [riders]");
  await admin.createTopics({
    topics: [
      {
        topic: "riders",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created Success [riders]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();