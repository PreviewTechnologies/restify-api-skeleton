module.exports = function(app) {
    var UsersV1 = require('../../controllers/UsersController');
    app.get({path: '/users', version: ['2.0.0']}, UsersV1.getStudent);
    app.get({path: '/users', version: ['1.0.0']}, UsersV1.getStudent);
};