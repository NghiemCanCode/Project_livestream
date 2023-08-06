const {check} = require('express-validator');

const LoginValidate =[
    check('name').notEmpty().withMessage('Name is required'),
    check('password').notEmpty().withMessage('Password is required')
]
module.exports = {
    LoginValidate
}