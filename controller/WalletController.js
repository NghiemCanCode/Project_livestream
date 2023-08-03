let getWallet = (req, res) => {
    return res.render("./twitch_wallet.ejs")
}
let getAnnaHistory = (req, res) => {
    return res.render("./wallet_anna_history.ejs")
}
let getPaymentHistory = (req, res) => {
    return res.render("./wallet_payment_history.ejs")
}

module.exports = {
    getWallet,
    getAnnaHistory,
    getPaymentHistory
}