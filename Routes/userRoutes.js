const User = require("../Controllers/userController");

module.exports = [
    {
        method:'GET',
        path: '/users',
        handler : User.getUser
    },
    {
        method:'GET',
        path: '/users/{id}',
        handler : User.getUserById
    },
]