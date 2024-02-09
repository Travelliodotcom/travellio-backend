const Profile = require('./model'); // Assuming you've defined your Mongoose model in a file named Profile.js

async function createProfile(profileData) {
    try {
        const newProfile = await Profile.create(profileData);
        return newProfile;
    } catch (error) {
        throw error;
    }
}

async function getProfileById(profileId) {
    try {
        const profile = await Profile.findById(profileId);
        return profile;
    } catch (error) {
        throw error;
    }
}

async function find(query = {}, projection = {}) {
    try {
        const profile = await Profile.find(query, projection);
        return profile;
    } catch (error) {
        throw error;
    }
}

async function findOne(query = {}, projection = {}) {
    try {
        const profile = await Profile.findOne(query, projection);
        return profile;
    } catch (error) {
        throw error;
    }
}

async function updateProfile(profileId, updateData) {
    try {
        const updatedProfile = await Profile.findByIdAndUpdate(profileId, updateData, { new: true });
        return updatedProfile;
    } catch (error) {
        throw error;
    }
}

async function deleteProfile(profileId) {
    try {
        return await Profile.findByIdAndDelete(profileId);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createProfile,
    find,
    findOne,
    getProfileById,
    updateProfile,
    deleteProfile
};
