const jwt = require('jsonwebtoken');
const secret = 'randomString'

function setUser( user) {
    const payload = {  ...user}
    return jwt.sign(payload, secret)
}

function getUser(token) {
    if (!token) return null;
    return jwt.verify(token, secret)
}

module.exports = {
    setUser,
    getUser
}