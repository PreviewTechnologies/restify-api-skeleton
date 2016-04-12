var restify = require('restify');
var util = require('util');

function MyError(message) {
    restify.RestError.call(this, {
        restCode: 'MyError',
        statusCode: 418,
        message: message,
        constructorOpt: MyError
    });
    this.name = 'MyError';
};
util.inherits(MyError, restify.RestError);