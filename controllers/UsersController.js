//This Controller deals with all functionalities of Student

function UsersController () {
    var Users = require('../models/UsersSchema');

    this.createUser = function (req, res, next) {
        var username = req.params.username;
        var first_name = req.params.first_name;
        var last_name = req.params.last_name;
        var nick_name = req.params.nick_name;
        var email_address = req.params.email_address;
        var gender = req.params.gender;
        var password = req.params.password;

        Users.create({
            username:username, first_name:first_name, last_name:last_name, nick_name:nick_name, email_address:email_address, gender:gender, password:password
        }, function(err, result) {
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

}

module.exports = new UsersController();