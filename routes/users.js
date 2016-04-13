module.exports = function(app) {
    var Users = require('../controllers/UsersController');
    app.post({path: '/users', version: ['1.0.0']}, Users.createUser);
    app.get({path: '/users', version: ['1.0.0']}, Users.getStudent);
};