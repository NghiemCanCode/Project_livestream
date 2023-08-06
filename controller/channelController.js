let getChannel2 = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./channel_2.ejs", {userName:''})
    }else{
        return res.render("./channel_2.ejs", {userName:cookies.UserName})
    }
}
let getChannelHome = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./channel_home_page.ejs", {userName:''})
    }else{
        return res.render("./channel_home_page.ejs", {userName:cookies.UserName})
    }
}
let getChannelSchedule = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./channel_schedule.ejs", {userName:''})
    }else{
        return res.render("./channel_schedule.ejs", {userName:cookies.UserName})
    }
}
let getChannelVideo = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./channel_videos.ejs", {userName:''})
    }else{
        return res.render("./channel_videos.ejs", {userName:cookies.UserName})
    }
}
let getChannelDescrision = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./channel.ejs", {userName:''})
    }else{
        return res.render("./channel.ejs", {userName:cookies.UserName})
    }
}
module.exports = {
    getChannel2,
    getChannelHome,
    getChannelSchedule,
    getChannelVideo,
    getChannelDescrision
}