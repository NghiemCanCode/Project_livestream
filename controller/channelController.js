let getChannel2 = (req, res) => {
    return res.render("./channel_2.ejs")
}
let getChannelHome = (req, res) => {
    return res.render("./channel_home_page.ejs")
}
let getChannelSchedule = (req, res) => {
    return res.render("./channel_schedule.ejs")
}
let getChannelVideo = (req, res) => {
    return res.render("./channel_videos.ejs")
}
let getChannelDescrision = (reg, res) => {
    return res.render("./channel.js")
}
module.exports = {
    getChannel2,
    getChannelHome,
    getChannelSchedule,
    getChannelVideo,
    getChannelDescrision
}