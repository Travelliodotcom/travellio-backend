const repository = require('./repository');

const getAllItineraries = async () => {
    try {
        return await repository.getAllItineraries()
    } catch (error) {
        throw new Error(`Error fetching all itineraries: ${error.message}`);
    }
};


module.exports = {
    getAllItineraries
}
