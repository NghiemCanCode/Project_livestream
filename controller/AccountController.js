let getForgotPassword = (req, res) => {
    return res.render("./forgot_password.ejs")
}
let getForgotPassword2 = (req, res) => {
    return res.render("./forgot_password_2")
}


module.exports = {
    getForgotPassword,
    getForgotPassword2,
}