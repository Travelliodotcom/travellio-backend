const Itinerary = require('./model');

const createItinerary = async (title, description, locations, startDate, endDate) => {
    try {
        const itinerary = new Itinerary({
            title,
            description,
            locations,
            startDate,
            endDate,
        });

        return await itinerary.save();
    } catch (error) {
        throw new Error(`Error creating itinerary: ${error.message}`);
    }
};

const getAllItineraries = async (query) => {
    try {
        return await Itinerary.find();
    } catch (error) {
        throw new Error(`Error fetching all itineraries: ${error.message}`);
    }
};

const getItineraryById = async (id) => {
    try {
        return await Itinerary.findById(id);
    } catch (error) {
        throw new Error(`Error fetching itinerary by ID: ${error.message}`);
    }
};

const updateItinerary = async (id, data) => {
    try {
        return await Itinerary.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        throw new Error(`Error updating itinerary: ${error.message}`);
    }
};

const deleteItinerary = async (id) => {
    try {
        return await Itinerary.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(`Error deleting itinerary: ${error.message}`);
    }
};

module.exports = {
    createItinerary,
    getAllItineraries,
    getItineraryById,
    updateItinerary,
    deleteItinerary,
};
