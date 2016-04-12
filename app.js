var restify = require('restify');
var config = require('./config');
var versioning = require('restify-url-semver');
var app = restify.createServer({
    name: 'REST-api',
    version: '1.0.0'
});

app.pre(function (req, res, next) {
    if (!req.headers['x-api-version']) {
        req.headers['x-api-version'] = '1.0.0';
    }
    next();
});

/**
 * API Versioning
 */
app.pre(versioning({ prefix: '/api' }));

app.pre(restify.pre.sanitizePath());

app.use(restify.fullResponse());
app.use(restify.bodyParser());
app.use(restify.queryParser());

app.listen(config.port, function () {
    console.log('server listening on port number', config.port);

});

var usersRoutes= require('./routes/users')(app);

app.get('/', function (req, res, next) {
    return res.json({
        "Hello": {
            "Here is your tasks": ["Do that tasks if you have .."],
            "Tasks": ["Grab some coffee", "Look at here", "Go back to your own tasks", "Never come again"]
        }
    });
});