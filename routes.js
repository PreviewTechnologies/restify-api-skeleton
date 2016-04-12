module.exports = function(app) {
    var student = require('./controllers/UsersController');

    app.get('/', function(req, res, next) {
        return res.send("WELCOME TO REST API");
    });

    app.post('/createStudent', student.createStudent); //Create Student API
    app.get('/getStudent', student.getStudent);  // Get All Student Details API
};

module.exports = function(app) {
    var Users = require('./controllers/UsersController');

    app.get('/', function(req, res, next) {
        return res.send("WELCOME TO REST API");
    });

    app.post('/users', Users.createStudent); //Create Student API
    app.get('/users', Users.getStudent);  // Get All Student Details API
};