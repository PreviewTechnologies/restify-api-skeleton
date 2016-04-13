/**
 * @api {post} /users Create new user
 * @apiName AddUsers
 * @apiGroup Users
 *
 * @apiParam {String} username (required) Username of user.
 * @apiParam {String} first_name First name of user.
 * @apiParam {String} last_name Last name of user.
 * @apiParam {String} nick_name Nickname of user.
 * @apiParam {String} gender Gender of user.
 * @apiParam {String} email_address Email address of user.
 * @apiParam {String} email_address Email address of user.
 *
 *
 * @apiSuccess {String} username username of the User.
 * @apiSuccess {String} first_name  First name of the User.
 * @apiSuccess {String} last_name  Last name of the User.
 * @apiSuccess {String} nick_name  User's Nickname.
 * @apiSuccess {String} gender  Gender of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
     *       "username": "shaharia",
     *       "lastname": "Doe"
     * }
 *
 * @apiError UserNotFound New User create failed.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
     *       "error": "UserNotFound"
     *     }
 */