let getHomepage = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./index.ejs", {errors: '', userName:''})
    }else{
        return res.render("./index.ejs", {errors: '', userName:cookies.UserName})
    }
    
}
let getFollowing = (req, res) =>{
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./following.ejs", {errors: '', userName:''})
    }else{
        return res.render("./following.ejs", {errors: '', userName:cookies.UserName})
    }
}
let getBrowse = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./browse.ejs", {errors: '', userName:''})
    }else{
        return res.render("./browse.ejs", {errors: '', userName:cookies.UserName})
    }
}
let getDetailCategory = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./detail_category_browse.ejs", {errors: '', userName:''})
    }else{
        return res.render("./detail_category_browse.ejs", {errors: '', userName:cookies.UserName})
    }
}
module.exports = {
    getHomepage,
    getFollowing,
    getBrowse,
    getDetailCategory
}