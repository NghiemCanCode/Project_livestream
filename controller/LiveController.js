
let getLive = (req, res) => {
    const cookies= req.cookies;
    res.send(cookies.IdToken)
    return res.render("./live.ejs")
}
module.exports = {
    getLive
}