module.exports = function(app) {
    var Users = require('../../controllers/UsersController');

    app.get('/v1/users', function(req, res, next) {
        return res.send("WELCOME TO REST API");
    });
};