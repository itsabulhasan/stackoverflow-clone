var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const TagsModel = require('../models/Tag');
const UserModel = require('../models/User');
const AnswerModel = require('../models/Answer');
const QuestionsModel = require('../models/Question');

async function login(data) {
    let {body, params, query} = data
    const emailId = body.email;
    let password = body.password;
    var response, statusCode;
    try {
        let user = await UserModel.findOne({emailId});
        console.log("#### users :", user, emailId)
        if (user) {
            delete user.password;
            let userObj = user;
            var userId = userObj._id;
            let isValidPassword = bcrypt.compareSync(password, userObj.password); // true
            if (isValidPassword == false) {
                response = { msg: 'Login failed' }
                statusCode = 401
                return {response, statusCode}
            }
            user.userId = user._id
            const token = jwt.sign({
                data: user
            }, 'my-secret-key-0001xx01212032432', { expiresIn: '24h' });
            response = {
                token: token,
                msg: 'LoggedIn successfully',
                data: user
            }
            statusCode = 200
            return {response, statusCode};
        } else {
            response = { msg: 'Invalid user name or password' }
            statusCode = 400
            return {response, statusCode}
        }
    } catch(err) {
        console.log("@@@@ err", err);
        response = { msg: 'Failed to login' }
        statusCode = 400
        return {response, statusCode};
    }
}

module.exports = {
    login
}