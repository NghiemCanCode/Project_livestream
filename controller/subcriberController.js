let getPackageRegister = (req, res) => {
    return res.render("./package_register.ejs")
}
let getPackageRegisterExpired = (req, res) =>{
    return res.render("./package_register_expired.ejs")
}
module.exports = {
    getPackageRegister,
    getPackageRegisterExpired
}