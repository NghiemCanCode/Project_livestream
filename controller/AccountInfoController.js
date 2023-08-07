import cloud from "../sample";

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
let getAccountSettingSecurity = async(req, res) => {
    const cookies= req.cookies;
    const channel= await cloud.GetChannelByName(cookies.UserName)
    const getStremkeyARN = await cloud.GetStreamKeyARN(channel.channels[0].arn)
    const getStreamkey = await cloud.GetStreamKey(getStremkeyARN.streamKeys[0].arn)
    const StreamkeyValue = getStreamkey.streamKey.value
    const server= await cloud.server;
    console.log(StreamkeyValue)
    if(cookies.UserName===null){
        return res.render("./setting_security.ejs", {userName:'', streamkey: '', sever:'' })
    }
    else{
        return res.render("./setting_security.ejs", {userName:cookies.UserName, streamkey: StreamkeyValue, server:server})
    }
}

// let updateImage= async(req, res)=>{
//     let imgname= req.body.img.split('.')[0]
//     let imgtype = req.body.img.split('.')[1]
//     let img = req.body.img
//     console.log(img,imgname,imgtype)
//     cloud.UploadImageToS3(imgname,img,imgtype)
// }

module.exports = {
    getCreatorDashBoard,
    getListFollower,
    getAccountSetting,
    getAccountSettingSecurity
}