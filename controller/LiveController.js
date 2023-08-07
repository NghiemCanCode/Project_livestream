import cloud from "../sample";
let getLive = async(req, res) => {
    const cookies= req.cookies;
    let name = req.params.userName
    
    const channel= await cloud.GetChannelByName(name)
    const channelarn = await cloud.GetChannel(channel.channels[0].arn)//playback
    const playbackURL=String(channelarn.channel.playbackUrl)
    if(cookies.UserName===null){
        return res.render("./live.ejs", {userName:'', playbackURL: playbackURL})
    }else{
        return res.render("./live.ejs", {userName:cookies.UserName, playbackURL: playbackURL})
    }
}
module.exports = {
    getLive
}