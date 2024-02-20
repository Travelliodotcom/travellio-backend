const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: String,
    guide: String,
    email: String,
    rating: Number,
    profilePic: String,
    gender: String,
    countries: [String],
    ethnicity: String,
    biography: String,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
