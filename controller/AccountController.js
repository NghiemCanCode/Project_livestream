import cloud from "../sample";
import jwt from 'jwt-decode';

let getForgotPassword = (req, res) => {
    return res.render("./forgot_password.ejs")
}
let getForgotPassword2 = (req, res) => {
    return res.render("./forgot_password_2")
}
let createNewUser = (req, res) => {
    console.log('check req: ', req.body)
    // const {name, email, pass, confirmpass, birth} = req.body;
    let name =req.body.name;
    let email=req.body.email;
    let pass=req.body.password;
    let confirmpass=req.body.confirmPassword;
    let birth = req.body.birth;
    if (pass === confirmpass){
        cloud.SignUp(name,pass, email, birth, name)
    }
    
    return res.send('create new')
}
var data
let Login = async(req, res) => {
    try{
        console.log('check req: ', req.body)
        let name = req.body.name
        let pass=req.body.password
        
        data = await cloud.Login(name,pass)
        // const decodedAccess= jwt(data.AccessToken)
        // const decodedId = jwt(data.IdToken)
        return res.redirect('/setCookie')
    }catch(err){
        console.log()
    }
}
let setCookie =(req, res)=> {
    res.cookie('AccessTolen',data.AccessToken,{
        expires: new Date(Date.now() * 1000),
        httpOnly: true
    })
    res.cookie('AccessTolen',data.AccessToken,{
        expires: new Date(Date.now() * 1000),
        httpOnly: true
    })
    res.cookie('UserName',jwt(data.AccessToken).username,{
        expires: new Date(Date.now() * 1000),
        httpOnly: true
    })
    return res.redirect('/')
}

module.exports = {
    getForgotPassword,
    getForgotPassword2,
    createNewUser,
    Login,
    setCookie
}