const db = require('../app/utils/databaseHelper');
require('dotenv').config();
const itineraryService = require('../app/models/itinerary/service');

module.exports = async function (context, req) {

    context.log('JavaScript HTTP trigger function processed a request.');

    try {
        await db.connect();

        const data = await itineraryService.getAllItineraries({});

        context.res = {
            status: 200, /* Defaults to 200 */
            body: data
        };

    } catch (error) {
        context.res = {
            status: 500,
            body: "Error connecting to MongoDB: " + error.message
        };
    } finally {
        await db.close();
    }
};
