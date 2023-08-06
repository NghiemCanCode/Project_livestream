
import cloud from "../sample";
import jwt from 'jwt-decode';

const {validationResult} = require('express-validator');
var data;
var userName;
let getForgotPassword = (req, res) => {
    return res.render("./forgot_password.ejs")
}
let getForgotPassword2 = (req, res) => {
    return res.render("./forgot_password_2")
}
let createNewUser = (req, res) => {
    console.log('check req: ', req.body)
    // const {name, email, pass, confirmpass, birth} = req.body;
    userName =req.body.name;
    let email=req.body.email;
    let pass=req.body.password;
    let confirmpass=req.body.confirmPassword;
    let birth = req.body.birth;
    if (pass === confirmpass){
            cloud.SignUp(userName,pass, email, birth, userName)
            cloud.CreateChannel(userName);
            cloud.CreateHoSoNguoiDung(userName,email, birth)
    }
}
let confirmRegister = (req, res) => {
    let code=req.body.code;
    console.log(userName, code)
    cloud.ConfirmSignUp(userName,code);
    return res.redirect('/')
}
let Login = async(req, res) => {
    const errors= validationResult(req);
    console.log('check req: ', req.body)
    console.log(errors)
    let name = req.body.name
    let pass = req.body.password
    if(!errors.isEmpty()){
        res.render('./index.ejs', {errors: errors.mapped(), userName:''});
    }
    else{
        data = await cloud.Login(name,pass)
        // const decodedAccess= jwt(data.AccessToken)
        // const decodedId = jwt(data.IdToken)
        return res.redirect('/setCookie')   
    }
         
    
}
let setCookie =(req, res)=> {
    res.cookie('AccessToken',data.AccessToken,{
        expires: new Date(jwt(data.AccessToken).exp * 1000),
        httpOnly: true
    })
    res.cookie('IdToken',data.IdToken,{
        expires: new Date(jwt(data.AccessToken).exp * 1000),
        httpOnly: true
    })
    res.cookie('UserName',jwt(data.AccessToken).username,{
        expires: new Date(jwt(data.AccessToken).exp * 1000),
        httpOnly: true
    })
    return res.render('./index.ejs', {errors: '', userName: jwt(data.AccessToken).username})
}
let getLogout =(req,res) => {
    res.clearCookie('UserName');
    res.clearCookie('AccessToken');
    res.clearCookie('IdToken');
    cloud.SignOut(data.AccessToken)
    return res.render('./index.ejs',{errors: '', userName:''})
}
let ChangePassword = (req, res) => {
    const cookies= req.cookies;
    let passold= req.body.passOld;
    let passnew= req.body.passNew;
    let passnewConfirm= req.body.passNewConfirm;
    console.log(cookies.AccessToken)
    if(passnew === passnewConfirm){
        cloud.ChangePassword(passold,passnew,cookies.AccessToken)
        res.clearCookie('UserName');
        res.clearCookie('AccessToken');
        res.clearCookie('IdToken');
        cloud.SignOut(data.AccessToken)
        return res.render('./index.ejs',{errors: '', userName:''})
    }
}
module.exports = {
    getForgotPassword,
    getForgotPassword2,
    createNewUser,
    Login,
    setCookie,
    confirmRegister,
    getLogout,
    ChangePassword
}