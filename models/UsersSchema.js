// Model for the Student
module.exports = (function studentSchema () {

    var mongoose = require('../db').mongoose;

    var schema = {
        name: {type: String, required: true},
        email: {type: String, required: true},
        age: {type: String, required: true},
        city: {type: String, required: true}
    };

    var collectionName = 'users';
    var UsersSchema = mongoose.Schema(schema);
    var Users = mongoose.model(collectionName, UsersSchema);

    return Users;
})();