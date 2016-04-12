//This Controller deals with all functionalities of Student

function UsersController () {
    var Users = require('../models/UsersSchema');

    this.createStudent = function (req, res, next) {
        var name = req.params.name;
        var email = req.params.email;
        var age = req.params.age;
        var city = req.params.city;

        Users.create({name:name,email:email,age:age,city:city}, function(err, result) {
            if (err) {
                console.log(err);
                return res.send({'error':err});
            }
            else {
                return res.send({'result':result,'status':'successfully saved'});
            }
        });
    };

    // Fetching Details of Student
    this.getStudent = function (req, res, next) {

        Users.find({}, function(err, result) {
            if (err) {
                console.log(err);
                return res.send({'error':err});
            }
            else {
                return res.send({'student Details':result});
            }
        });
    };

    return this;

};

module.exports = new UsersController();