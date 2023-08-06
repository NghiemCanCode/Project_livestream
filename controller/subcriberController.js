let getPackageRegister = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./package_register.ejs", {userName:''})
    }else{
        return res.render("./package_register.ejs", {userName:cookies.UserName})
    }
}
let getPackageRegisterExpired = (req, res) =>{
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./package_register_expired.ejs", {userName:''})
    }else{
        return res.render("./package_register_expired.ejs", {userName:cookies.UserName})
    }
}
module.exports = {
    getPackageRegister,
    getPackageRegisterExpired
}