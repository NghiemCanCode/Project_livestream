let getDetailHome = (req, res) => {
    return res.render("./detail_avt_home_page.ejs")
}
let getDetailSchedule = (req, res) => {
    return res.render("./detail_avt_schedule.ejs")
}
let getDetailVideo = (req, res) => {
    return res.render("./detail_avt_video.ejs")
}
let getDetail = (req, res) => {
    return res.render("./detail_avt.ejs")
}
module.exports = {
    getDetailHome,
    getDetailSchedule,
    getDetailVideo,
    getDetail
}