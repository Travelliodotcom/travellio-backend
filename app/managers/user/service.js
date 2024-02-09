const { find } = require('./model');
const repository = require('./repository');

const create = async (profile) => {
    try {

        // TODO: Add zod to add core validation support (@shravan20)
        if (profile.name || profile.email || profile.username) {
            throw new Error()
        }

        let user = await repository.findOne({ email: profile.email });
        /**
         * TODO: (@shravan20)
         * 1. Create custom error support with valid status code 
         * 2. Add global exception handler
         **/
        if (user) {
            throw new Error('User already exists for this email');
        }

        return await repository.createProfile(profile);
    } catch (error) {
        throw error;
    }
}


const findAll = async () => {
    return await repository.find();
}

module.exports = {
    create,
    findAll,
};
