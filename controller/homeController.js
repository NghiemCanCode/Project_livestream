let getHomepage = (req, res) => {
    return res.render("./index.ejs")
}
let getFollowing = (req, res) =>{
    return res.render("./following.ejs")
}
let getBrowse = (req, res) => {
    return res.render("./browse.ejs")
}
let getDetailCategory = (reg, res) => {
    return res.render("./detail_category_browse.ejs")
}
module.exports = {
    getHomepage,
    getFollowing,
    getBrowse,
    getDetailCategory
}