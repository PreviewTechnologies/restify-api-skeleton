var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

module.exports = (function studentSchema() {

    var mongoose = require('../db').mongoose;

    var schema = {
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
        first_name: {
            default: null,
            type: String,
            required: true
        },
        last_name: {
            default: null,
            type: String,
            required: true
        },
        nick_name: {
            default: null,
            type: String,
            maxLength: [
                15, "Username must less than 20 character"
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
            required: true,
            type: String,
            minLength: [
                5, "Password must be greater than 5 character"
            ],
            maxLength: [
                255, "Password must be less than 30 character"
            ]
        }
    };

    var collectionName = 'users';
    var UsersSchema = mongoose.Schema(schema, {minimize: false});

    UsersSchema.pre('save', function(next) {
        var user = this;

        // only hash the password if it has been modified (or is new)
        if (!user.isModified('password')) return next();

        // generate a salt
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            if (err) return next(err);

            // hash the password along with our new salt
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);

                // override the cleartext password with the hashed one
                user.password = hash;
                next();
            });
        });
    });


    var Users = mongoose.model(collectionName, UsersSchema);

    return Users;
})();