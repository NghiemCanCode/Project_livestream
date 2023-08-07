
import cloud from "../sample";
import jwt from 'jwt-decode';

const {validationResult} = require('express-validator');
var data;
var userName;
var name;
let getForgotPassword = (req, res) => {
    
    return res.render("./forgot_password.ejs", {errors: ''})
}
let getForgotPassword2 = (req, res) => {
    return res.render("./forgot_password_2", {errrors:''})
}
let setForgotPass = async(req, res) => {
    name = req.body.name
    const check= await cloud.ForgotPassword(name)
    console.log(check)
    // if(check ===''){
    //     return res.render("./forgot_password.ejs", {errors:{msg: "Tài khoản không tồn tại"}})
    // }
    // else{
    //     return res.render('./forgot_password_2', {errors: ''})
    // }
}
let setForgotPassConfirm = async(req, res) => {
    let code= req.body.code
    let newPass= req.body.newPass
    const check= await cloud.ConfirmForgotPassword(name,code,newPass)
    console.log(check)
    // if(check ===''){
    //     return res.render("./forgot_password_2", {errrors:{msg : ''}})
    // }
    // else{
    //     res.render('./index.ejs', {errors: '', userName:'', streamers:''});
    // }
}
let createNewUser = async(req, res) => {
    const errors= validationResult(req);
    // console.log('check req: ', req.body)
    // const {name, email, pass, confirmpass, birth} = req.body;
    userName =req.body.nameRegister;
    let email=req.body.email;
    let pass=req.body.passwordRegister;
    let confirmpass=req.body.confirmPassword;
    let birth = req.body.birth;
    console.log(errors.mapped())
    if(!errors.isEmpty()){
        res.render('./index.ejs', {errors: errors.mapped(), userName:'', streamers:''});
    }
    else{
            const newUser = await cloud.SignUp(userName,pass, email, birth, userName)
            if(newUser ==='User already exists'){
                return res.render('./index.ejs', {errors:{userexist:{msg: "Tài khoản đã tồn tại"} }, userName:'', streamers:''});
            }else{
                cloud.CreateChannel(userName);
                cloud.CreateHoSoNguoiDung(userName,email, birth)
            }
    }
}
let confirmRegister = (req, res) => {
    let code=req.body.code;
    console.log(userName, code)
    cloud.ConfirmSignUp(userName,code);
    alert("Đăng ký thành công")
    return res.redirect('/')
}
let Login = async(req, res) => {
    const errors= validationResult(req);
    // console.log('check req: ', req.body)
    // console.log(errors)
    let name = req.body.name
    let pass = req.body.password
    
    if(!errors.isEmpty()){
        res.render('./index.ejs', {errors: errors.mapped(), userName:'',streamers:''});
    }
    else{
        data = await cloud.Login(name,pass)
        if(data==='Incorrect username or password.'){
            console.log(data)
            return res.render('./index.ejs', {errors:{ wronglogin:{ msg: "Tài khoản hoặc mật khẩu của bạn không đúng"} }, userName:'',streamers:''});
        }else{
            return res.redirect('/setCookie')  
        }   
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
    return res.render('./index.ejs', {errors: '', userName: jwt(data.AccessToken).username,streamers:''})
}
let getLogout =(req,res) => {
    const cookies= req.cookies;
    res.clearCookie('UserName');
    res.clearCookie('AccessToken');
    res.clearCookie('IdToken');
    cloud.SignOut(cookies.AccessToken)
    return res.render('./index.ejs',{errors: '', userName:'',streamers:''})
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
        cloud.SignOut(cookies.AccessToken)
        return res.render('./index.ejs',{errors: '', userName:'',streamers:''})
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
    ChangePassword,
    setForgotPass,
    setForgotPassConfirm
}