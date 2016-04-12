// Model for the Student
module.exports = (function studentSchema () {

    var mongoose = require('../db').mongoose;

    var schema = new mongoose.Schema({
        username: {
            default: null,
            type: String,
            required: true,
            unique: true,
            minLength: [
                4, 'Username must greater than 4 character'
            ],
            maxLength: [
                20, "Username must less than 20 character"
            ]
        },
        email_address: {
            default: null,
            type: String,
            unique: true,
            required: true
        },
        gender: {
            default: null,
            type: String,
            enum: ['Male', 'Female']
        },
        password: {
            type: String,
            minLength: [
                5, "Password must be greater than 5 character"
            ],
            maxLength: [
                255, "Password must be less than 30 character"
            ]
        }

    }, {minimize: false});

    var collectionName = 'users';
    var UsersSchema = mongoose.Schema(schema);
    var Users = mongoose.model(collectionName, UsersSchema);

    return Users;
})();