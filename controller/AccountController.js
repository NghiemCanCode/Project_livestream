import cloud from "../sample";
import cookie from 'universal-cookie';
import jwt from 'jwt-decode';
let getForgotPassword = (req, res) => {
    return res.render("./forgot_password.ejs")
}
let getForgotPassword2 = (req, res) => {
    return res.render("./forgot_password_2")
}
let createNewUser = (req, res) => {
    console.log('check req: ', req.body)
    let {name, email, pass, confirmpass, birth} = req.body;
    if (pass === confirmpass){
        cloud.SignUp(name,pass, email, birth, name)
    }
    
    return res.send('create new')
}
let login = async(req, res) => {
    console.log('check req: ', req.body)
    let name = req.body.name
    let pass=req.body.password
    
    // cloud.Login(name,pass)
    let data = await cloud.Login(name,pass)
    
}

module.exports = {
    getForgotPassword,
    getForgotPassword2,
    createNewUser,
    login
}