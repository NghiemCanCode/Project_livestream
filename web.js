import express from 'express';
import AccountController from "./controller/AccountController"
import AccountInfoController from "./controller/AccountInfoController"
import channelController from "./controller/channelController"
import detailchannelController from "./controller/detailchannelController"
import homeController from "./controller/homeController"
import subcriberController from "./controller/subcriberController"
import WalletController from "./controller/WalletController"
import LiveController from "./controller/LiveController"

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/following', homeController.getFollowing)
    router.get('/browse', homeController.getBrowse)
    router.get("/browse/Detail", homeController.getDetailCategory)
    router.get("/DashBoard", AccountInfoController.getCreatorDashBoard)
    router.get("/Follower", AccountInfoController.getListFollower)
    router.get("/setting/profile",AccountInfoController.getAccountSetting)
    router.get("/setting/security", AccountInfoController.getAccountSettingSecurity)
    router.get("/Name", channelController.getChannelHome)
    router.get("/Name/about", channelController.getChannelDescrision)
    router.get("/Name/schedule", channelController.getChannelSchedule)
    router.get("/Name/videos", channelController.getChannelVideo)
    router.get("/live", LiveController.getLive)
    router.get("/subscriptions", subcriberController.getPackageRegister)
    router.get("/subscriptionsExpired", subcriberController.getPackageRegister)
    router.get("/wallet", WalletController.getWallet)
    router.get("/historySubcriber", WalletController.getPaymentHistory)
    router.get("/historyPurchase", WalletController.getAnnaHistory)
    return app.use('/', router);
}

export default initWebRoute;