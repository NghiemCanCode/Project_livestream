let getCreatorDashBoard = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./creator_dashboard.ejs", {userName:''})
    }else{
        return res.render("./creator_dashboard.ejs", {userName:cookies.UserName})
    }
}
let getListFollower = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./list_follower.ejs", {userName:''})
    }else{
        return res.render("./list_follower.ejs", {userName:cookies.UserName})
    }
}
let getAccountSetting = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./setting.ejs", {userName:''})
    }else{
        return res.render("./setting.ejs", {userName:cookies.UserName})
    }
}
let getAccountSettingSecurity = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./setting_security.ejs", {userName:''})
    }else{
        return res.render("./setting_security.ejs", {userName:cookies.UserName})
    }
}

module.exports = {
    getCreatorDashBoard,
    getListFollower,
    getAccountSetting,
    getAccountSettingSecurity
}