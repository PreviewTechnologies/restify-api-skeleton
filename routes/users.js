module.exports = function(app) {
    var UsersV1 = require('../controllers/UsersController');
    app.post({path: '/users', version: ['1.0.0']}, UsersV1.createStudent);
    app.get({path: '/users', version: ['1.0.0']}, UsersV1.getStudent);
};