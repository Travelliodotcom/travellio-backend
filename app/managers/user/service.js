const { find } = require('./model');
const repository = require('./repository');
const validation = require('./validation');

const create = async (profile) => {
    try {

        // TODO: Add zod to add core validation support (@shravan20)
        if (!profile.name || !profile.email || !profile.username) {
            throw new Error("Required fields are not provided")
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

        return await createUser(profile);
    } catch (error) {
        throw error;
    }
}

async function createUser(profile) {
    return await repository.createProfile(profile);
}


const signIn = async (profile) => {
    try {
        await validation.profileSchema.parse(profile);

        let profile = await repository.findOne({ email: profile.email });

        if (!profile) {
            profile = await createUser(profile);
        }

        /**
         * TODO: Move this to env later
         */
        // Access Token Expiry Time +1 hr
        let accessTokenTimeToExpire = Math.floor(Date.now() / 1000) + (60 * 60);
        // Refresh Token Expiry Time +8 hr
        let refreshTokenTimeToExpire = Math.floor(Date.now() / 1000) + (8 * (60 * 60));

        let response = {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            accessToken: jwt.jwtGenerator({
                id: user._id,
                email: user.email,
            }, accessTokenTimeToExpire),
            refreshToken: jwt.jwtGenerator({
                id: user._id,
                email: user.email,
            }, refreshTokenTimeToExpire)
        }

        return response;
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
