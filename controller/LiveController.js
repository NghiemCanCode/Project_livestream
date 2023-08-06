
let getLive = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./live.ejs", {userName:''})
    }else{
        return res.render("./live.ejs", {userName:cookies.UserName})
    }
}
module.exports = {
    getLive
}