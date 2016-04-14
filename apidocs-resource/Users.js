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
 *
         {
             "result": {
                 "success": true,
                 "message": "New user has been created",
                 "data": {
                     "__v": 0,
                     "password": "$2a$10$tIQodVq/MoXYao7EHKyezuvjPay.CCG5enGx605In4sJOVMIl0nJi",
                     "_id": "570e2c7c3bfe080c37016586",
                     "gender": "Male",
                     "email_address": "shaharia.azsaam@gmail.com",
                     "nick_name": null,
                     "last_name": "Azam",
                     "first_name": "Shaharia",
                     "username": "shahariaass"
                 }
             }
         }
 *
 * @apiError UserNotFound New User create failed.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
     *       "error": "UserNotFound"
     *     }
 */