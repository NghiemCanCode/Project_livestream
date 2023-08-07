import cloud from "../sample";

let getHomepage = async(req, res) => {
    const StreamList= await cloud.GetStreamList("HEALTHY", 5);
    const data=[]
    const cookies= req.cookies;
    console.log(StreamList.streams.length)
    if(StreamList.streams.length === 0){
        if(cookies.UserName===null){
            return res.render("./index.ejs", {errors: '', userName:'', streamers:''})
        }else{
            
            return res.render("./index.ejs", {errors: '', userName:cookies.UserName, streamers:''})
        }
    }else{
        for(var i=0; i<StreamList.streams.length;i++){
            const arn = await cloud.GetStreamKeyARN(StreamList.streams[i].channelArn)
            console.log(arn.streamKeys[0].arn)
            const getChannel = await cloud.GetChannel(arn.streamKeys[0].channelArn)
            console.log(getChannel)
            const user = await cloud.GetHoSoNguoiDung(getChannel.channel.name)
            console.log(user.Item)
  
            data.push({name: user.Item.TenDangNhap.S, AnhBia: user.Item.AnhBiaARN.S, view: StreamList.streams[i].viewerCount})
            
            return res.render("./index.ejs", {errors: '', userName:cookies.UserName, streamers: data})
        }
        
    }
}
let getFollowing = async(req, res) =>{
    const StreamList= await cloud.GetStreamList("HEALTHY", 5);
    const data=[]
    const cookies= req.cookies;
    if(StreamList.streams.length === 0){
        if(cookies.UserName===null){
            return res.render("./following.ejs", {errors: '', userName:'', streamers:''})
        }else{ 
            return res.render("./following.ejs", {errors: '', userName:cookies.UserName, streamers:''})
        }
    }else{
        for(var i=0; i<StreamList.streams.length;i++){
            const arn = await cloud.GetStreamKeyARN(StreamList.streams[i].channelArn)
            console.log(arn.streamKeys[0].arn)
            const getChannel = await cloud.GetChannel(arn.streamKeys[0].channelArn)
            console.log(getChannel)
            const user = await cloud.GetHoSoNguoiDung(getChannel.channel.name)
            console.log(user.Item)
  
            data.push({name: user.Item.TenDangNhap.S, AnhBia: user.Item.AnhBiaARN.S, view: StreamList.streams[i].viewerCount})
            
            return res.render("./index.ejs", {errors: '', userName:cookies.UserName, streamers: data})
        }
        
    }
}
let getBrowse = async(req, res) => {
    const StreamList= await cloud.GetStreamList("HEALTHY", 5);
    const data=[]
    const cookies= req.cookies;
    if(StreamList.streams.length === 0){
        if(cookies.UserName===null){
            return res.render("./browse.ejs", {errors: '', userName:'', streamers:''})
        }else{ 
            return res.render("./browse.ejs", {errors: '', userName:cookies.UserName, streamers:''})
        }
    }else{
        for(var i=0; i<StreamList.streams.length;i++){
            const arn = await cloud.GetStreamKeyARN(StreamList.streams[i].channelArn)
            console.log(arn.streamKeys[0].arn)
            const getChannel = await cloud.GetChannel(arn.streamKeys[0].channelArn)
            console.log(getChannel)
            const user = await cloud.GetHoSoNguoiDung(getChannel.channel.name)
            console.log(user.Item)
            data.push({name: user.Item.TenDangNhap.S, AnhBia: user.Item.AnhBiaARN.S, view: StreamList.streams[i].viewerCount})
            return res.render("./index.ejs", {errors: '', userName:cookies.UserName, streamers: data})
        }
        
    }
}
let getDetailCategory = async(req, res) => {
    const StreamList= await cloud.GetStreamList("HEALTHY", 5);
    const data=[]
    const cookies= req.cookies;
    if(StreamList.streams.length === 0){
        if(cookies.UserName===null){
            return res.render("./detail_category_browse.ejs", {errors: '', userName:'', streamers:''})
        }else{ 
            return res.render("./detail_category_browse.ejs", {errors: '', userName:cookies.UserName, streamers:''})
        }
    }else{
        for(var i=0; i<StreamList.streams.length;i++){
            const arn = await cloud.GetStreamKeyARN(StreamList.streams[i].channelArn)
            console.log(arn.streamKeys[0].arn)
            const getChannel = await cloud.GetChannel(arn.streamKeys[0].channelArn)
            console.log(getChannel)
            const user = await cloud.GetHoSoNguoiDung(getChannel.channel.name)
            console.log(user.Item)
            data.push({name: user.Item.TenDangNhap.S, AnhBia: user.Item.AnhBiaARN.S, view: StreamList.streams[i].viewerCount})
            console.log(data)
            return res.render("./index.ejs", {errors: '', userName:cookies.UserName, streamers: data})
        }
        
    }
}
module.exports = {
    getHomepage,
    getFollowing,
    getBrowse,
    getDetailCategory,
}