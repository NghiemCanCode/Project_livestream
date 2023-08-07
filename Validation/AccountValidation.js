const {check} = require('express-validator');

const LoginValidate =[
    check('name').notEmpty().withMessage('Tên tài khoản không được để trống'),
    check('password').notEmpty().withMessage('Mật khẩu không được để trống')
]
const RegisterValidate =[
    check('nameRegister').notEmpty().withMessage('Tên tài khoản không được để trống'),
    check('passwordRegister').notEmpty().withMessage('Mật khẩu không được để trống').isLength({min:8, max:16}).withMessage('Mặt khẩu phải từ 8 đến 16 ký tự'),
    check('confirmPassword').notEmpty().withMessage('Nhập lại mật khẩu không được để trống').custom((value, {req})=> {
        return value != req.body.password;
    }).withMessage("Nhập lại mật khẩu không đúng"),
    check('email').notEmpty().withMessage('Email không được để trống').isEmail().withMessage('Vui lòng nhập dạng địa chỉ email'),
    check('birth').notEmpty().withMessage('Ngày sinh không được để trống')
]
module.exports = {
    LoginValidate,
    RegisterValidate
}