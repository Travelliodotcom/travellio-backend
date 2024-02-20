const jwt = require("jsonwebtoken");

const jwtGenerator = (payload, time) => {
    return jwt.sign({
        data: payload, exp: time,
    }, process.env.JWT_SECRET);
}


module.exports = {
    jwtGenerator
}