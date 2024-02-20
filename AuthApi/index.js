const db = require('../app/utils/databaseHelper');
require('dotenv').config();
const itineraryService = require('../app/models/itinerary/service');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    try {
        await db.connect();

        let data;

        // TODO: Create a simple switch case / factory design pattern (@shravan20)
        if (context.req.method == 'POST') {
            data = await profileService.create(context.req.body);
        }

        context.res = {
            status: 200, /* Defaults to 200 */
            body: data
        };

    } catch (error) {
        // TODO:Global Error handler to handle 4xx errors
        context.res = {
            status: 500,
            body: "Error connecting to MongoDB: " + error.message
        };
    } finally {
        await db.close();
    }
}