const mongoose = require('mongoose');

const connect = async () => {
    try {
        /**
         * TODO: Add configurations required for DB connection and sanity
         */
        const options = {
        };

        const dbUrl = process.env.CONN_STRING
        await mongoose.connect(dbUrl, options);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
};

module.exports = {
    connect,
    close: () => mongoose.connection.close()
};