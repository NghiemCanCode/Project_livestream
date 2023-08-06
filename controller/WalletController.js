let getWallet = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./twitch_wallet.ejs", {userName:''})
    }else{
        return res.render("./twitch_wallet.ejs", {userName:cookies.UserName})
    }
}
let getAnnaHistory = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./wallet_anna_history.ejs", {userName:''})
    }else{
        return res.render("./wallet_anna_history.ejs", {userName:cookies.UserName})
    }
}
let getPaymentHistory = (req, res) => {
    const cookies= req.cookies;
    if(cookies.UserName===null){
        return res.render("./wallet_payment_history.ejs", {userName:''})
    }else{
        return res.render("./wallet_payment_history.ejs", {userName:cookies.UserName})
    }
}

module.exports = {
    getWallet,
    getAnnaHistory,
    getPaymentHistory
}