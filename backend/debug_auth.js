const mongoose = require('mongoose');

const uriBase = "mongodb://tulasi:tulasi2004@ac-oitfdnt-shard-00-00.8lae4dk.mongodb.net:27017,ac-oitfdnt-shard-00-01.8lae4dk.mongodb.net:27017,ac-oitfdnt-shard-00-02.8lae4dk.mongodb.net:27017/svu_database?ssl=true&retryWrites=true&w=majority";

async function testConnection(authSource) {
    console.log(`\nTesting with authSource=${authSource}...`);
    const uri = `${uriBase}&authSource=${authSource}`;
    try {
        await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
        console.log(`✅ SUCCESS: Connected with authSource=${authSource}`);
        await mongoose.disconnect();
        return true;
    } catch (err) {
        console.log(`❌ FAILED with authSource=${authSource}: ${err.message}`);
        return false;
    }
}

async function run() {
    // Test admin (default for Atlas)
    let success = await testConnection('admin');
    if (success) process.exit(0);

    // Test specific DB (common if user created with specific db access)
    success = await testConnection('svu_database');
    if (success) process.exit(0);

    console.log("\n❌ All authentication attempts failed. Please verify username and password.");
    process.exit(1);
}

run();
