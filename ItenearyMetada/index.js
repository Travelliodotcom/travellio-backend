const MongoClient = require('mongodb').MongoClient;

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Your MongoDB connection string
    const uri = process.env.CONN_STRING;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();

        // Replace 'your_db_name' and 'your_collection_name' with your actual database and collection names
        const database = client.db("TravellioDB");
        const collection = database.collection("ItenaryCollection");
        
        // Example: find one document
        const doc = await collection.findOne({});

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: doc
        };

    } catch (error) {
        context.res = {
            status: 500,
            body: "Error connecting to MongoDB: " + error.message
        };
    } finally {
        await client.close();
    }
};
