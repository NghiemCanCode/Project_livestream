let getCreatorDashBoard = (reg, res) => {
    return res.render("./creator_dashboard.ejs")
}
let getListFollower = (reg, res) => {
    return res.render("./list_follower.ejs")
}
let getAccountSetting = (reg, res) => {
    return res.render("./setting.ejs")
}
let getAccountSettingSecurity = (reg, res) => {
    return res.render("./setting_security.ejs")
}

module.exports = {
    getCreatorDashBoard,
    getListFollower,
    getAccountSetting,
    getAccountSettingSecurity
}