const modal = document.querySelector('.js-modal');
const modalOverlay = document.querySelectorAll('.js-modal__overlay');
const modalBtnBack = document.querySelectorAll('#js-modal-btn-back');

const btnLogin = document.querySelectorAll('.js-modal-login');
const btnRegister = document.querySelectorAll('.js-modal-register');

const authForm = document.querySelectorAll('.js-auth-form');


function removeForm() {
    modal.style.display = 'none';
}
//click Goi dang ky
let signsubs = document.querySelectorAll("#signsubs")
signsubs.forEach(e => {
    e.addEventListener("click", () => {
        location.href = '/subscriptions'
    })
})

// click login show form
btnLogin.forEach(e => {
    e.addEventListener('click', () => {
        authForm[0].style.display = 'none';
        authForm[1].style.display = 'block';
        modal.style.display = 'block';
    });
})

// click register show form
btnRegister.forEach(e => {
    e.addEventListener('click', () => {
        authForm[1].style.display = 'none';
        authForm[0].style.display = 'block';
        modal.style.display = 'block';
    });
})

// redirect form login & register
let redirectLogin = document.querySelectorAll("#redirectLogin")
redirectLogin.forEach(e => {
    e.addEventListener("click", () => {
        authForm[0].style.display = 'none';
        authForm[1].style.display = 'block';
        modal.style.display = 'block';
    })
})

//modal xác nhận sign in
let register = document.querySelectorAll("#register")
let modalConfirmRegister = document.querySelectorAll("#modalConfirmRegister")
let closeModalConfirmRegister = document.querySelectorAll("#closeModalConfirmRegister")
register.forEach(e => {
    e.addEventListener("click", () => {
        modalConfirmRegister.forEach(e => {
            e.style.display = 'block'
        })
        authForm[0].style.display = 'none';
    })
})

closeModalConfirmRegister.forEach(e => {
    e.addEventListener("click", () => {
        modalConfirmRegister.forEach(e => {
            e.style.display = 'none'
        })
        modal.style.display = 'none';
    })
})


let redirectRegister = document.querySelectorAll("#redirectRegister")
redirectRegister.forEach(e => {
    e.addEventListener("click", () => {
        authForm[1].style.display = 'none';
        authForm[0].style.display = 'block';
        modal.style.display = 'block';
    })
})

// forgot password
let forgotPassword = document.querySelectorAll("#forgotPassword")
forgotPassword.forEach(e => {
    e.addEventListener("click", () => {
        location.href = '/account-recovery'
    })
})

// click back remove form
modalBtnBack.forEach((item) => {
    item.addEventListener('click', removeForm)
})

// click overlay remove form
modalOverlay.forEach(e => {
    e.addEventListener('click', removeForm);
})

// for (var i = 0; i < form.length; i++) {

//     if(form[0]) {
//         form[1].style.display = 'none';
//     }
// }

// home-filter__btn
const filterBtn = document.querySelectorAll('.home-filter__btn')

// console.log(filterBtn)
function showFilter() {
    for (var item of filterBtn) {
        item.classList.remove('btn--primary');
        this.classList.add('btn--primary')
    }
}

filterBtn.forEach(item => {
    item.addEventListener('click', showFilter)
})

// action like product
const likeProducts = document.querySelectorAll('.home-product-item__like');
const rateProduct = document.querySelectorAll('.home-product-item__rating');

// console.log(likeProducts)

for (var item of likeProducts) {
    item.addEventListener('click', function () {
        likeProducts.forEach((item) => {
            this.classList.add('home-product-item__liked')
        })
    })
}

// header mobile search
const mobileSearch = document.querySelector('.header__mobile-search');
const headerSearch = document.querySelector('.header__search');

// mobileSearch.addEventListener('click', function () {
//     if (headerSearch.style.display === "none") {
//         headerSearch.style.display = "flex";
//     } else {
//         headerSearch.style.display = "none";
//     }
// })

// header__sort-item -- active

const headerItemMb = document.querySelectorAll('.header__sort-item');

function showItemMb() {
    for (var item of headerItemMb) {
        item.classList.remove('header__sort-item--active');
        this.classList.add('header__sort-item--active');
    }
}

headerItemMb.forEach((item) => {
    item.addEventListener('click', showItemMb);
})

//
let browse = document.querySelectorAll("#browse")
browse.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/browse"
    })
})

let liveChannel = document.querySelectorAll("#liveChannel")
liveChannel.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "./browse_live.html"
    })
})

let browseCategory = document.querySelectorAll("#browseCategory")
browseCategory.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/browse"
    })
})

let followingHeader = document.querySelectorAll("#followingHeader")
followingHeader.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/following"
    })
})

let detailCategory = document.querySelectorAll("#detailCategory")
detailCategory.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/browse/Detail"
    })
})

let detaiAvt = document.querySelectorAll("#detaiAvt")
detaiAvt.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/detail"
    })
})

let live = document.querySelectorAll("#live")
live.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/live"
    })
})

// menu
let channels = document.querySelectorAll("#channels")
channels.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/Name/Channel"
    })
})

let videoChannels = document.querySelectorAll("#videoChannels")
videoChannels.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/Name/videos"
    })
})

let packageRegister = document.querySelectorAll("#packageRegister")
packageRegister.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/subscriptions"
    })
})

let twitchWallet = document.querySelectorAll("#twitchWallet")
twitchWallet.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/wallet"
    })
})

let setting = document.querySelectorAll("#setting")
setting.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/setting/profile"
    })
})

let settingSecurity = document.querySelectorAll("#settingSecurity")
settingSecurity.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/setting/security"
    })
})

let scheduleChannels = document.querySelectorAll("#scheduleChannels")
scheduleChannels.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/Name/schedule"
    })
})

let channleHomePage = document.querySelectorAll("#channleHomePage")
channleHomePage.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/Name"
    })
})

let detailAvtHomePage = document.querySelectorAll("#detailAvtHomePage")
detailAvtHomePage.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/detailhome"
    })
})

let creatorDashboard = document.querySelectorAll("#creatorDashboard")
creatorDashboard.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/DashBoard"
    })
})

let backToHome = document.querySelectorAll("#backToHome")
backToHome.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/"
    })
})

// --
let formLoginARegister = document.querySelectorAll("#formLoginARegister")
let menuAvt = document.querySelectorAll("#menuAvt")
let btnLoginPage = document.querySelectorAll("#login")
let iconBits = document.querySelectorAll(".iconBits")
// register.forEach(e => {
//     e.addEventListener("click", () => {
//         modalConfirmRegister.forEach(e => {
//             e.style.display = 'block'
//         })
//         // authForm[0].style.display = 'none';
//     })
// })
// btnLoginPage.forEach(btn => {
//     btn.addEventListener("click", () => {
//         // modal.style.display = 'none'
//     })
// })

// btnLoginPage.addEventListener("click", () => {
//     formLoginARegister.style.display = 'none'
//     menuAvt.style.display = 'block'
//     modal.style.display = 'none'
// })

let logout = document.querySelectorAll("#logout")
logout.forEach(btn => {
    btn.addEventListener("click", () => {
        formLoginARegister.forEach(e => {
            e.style.display = 'flex'
        })
        menuAvt.forEach(e => {
            e.style.display = 'none'
        })
    })
})

// modal package register
var submitButton = document.querySelectorAll("#submitModalPackage");
var modalPackageRegister = document.getElementById("modalPackageRegister");

submitButton.forEach(e => {
    e.addEventListener("click", function () {
        modalPackageRegister.style.display = "block";
    });
})

var closeModalButton = document.querySelectorAll("#closeModal");
closeModalButton.forEach(e => {
    e.addEventListener("click", function () {
        modalPackageRegister.style.display = "none";
    });
})

// modal twitch wallet
var withdrawMoneyButton = document.querySelectorAll("#withdrawMoney");
var modalTwitchWallet = document.getElementById("modalTwitchWallet");

withdrawMoneyButton.forEach(e => {
    e.addEventListener("click", function () {
        modalTwitchWallet.style.display = "block";
    });
})

var closeModalButton = document.querySelectorAll("#closeModal2");
closeModalButton.forEach(e => {
    e.addEventListener("click", function () {
        modalTwitchWallet.style.display = "none";
    });
})

//
let withdrawMoneyButtonFinal = document.querySelectorAll("#withdrawMoneyFinal");
withdrawMoneyButtonFinal.forEach(e => {
    e.addEventListener("click", () => {
        modalTwitchWallet.style.display = "none";
    })
})

// toggle click live report
let reportLives = document.querySelectorAll("#reportLive")
reportLives.forEach(e => {
    e.addEventListener("click", function () {
        var liveMenu = document.querySelector(".live-menu");
        if (liveMenu.style.display === "none" || liveMenu.style.display === "") {
            liveMenu.style.display = "block";
        } else {
            liveMenu.style.display = "none";
        }
    });
})

// toggle click report channel videos
let openReportChannelVideo = document.querySelectorAll(".openReportChannelVideo")
openReportChannelVideo.forEach(e => {
    e.addEventListener("click", function () {
        const reportChannelVideo = e.nextElementSibling;
        if (reportChannelVideo.style.display === "none" || reportChannelVideo.style.display === "") {
            reportChannelVideo.style.display = "block";
        } else {
            reportChannelVideo.style.display = "none";
        }
    });
})

// toggle bits menu
let bitMenus = document.querySelectorAll("#bitMenu")
bitMenus.forEach(e => {
    e.addEventListener("click", function () {
        var bitMenu = document.querySelector(".bits-menu");
        if (bitMenu.style.display === "none" || bitMenu.style.display === "") {
            bitMenu.style.display = "block";
        } else {
            bitMenu.style.display = "none";
        }
    });
});

// modal report live
let reportLiveStream = document.querySelectorAll("#reportLiveStream")
let modalReportLive = document.querySelector("#modalReportLive")
reportLiveStream.forEach(e => {
    e.addEventListener("click", () => {
        modalReportLive.style.display = 'block';
    })
})

var closeModalButton = document.querySelectorAll("#closeModal3");
closeModalButton.forEach(e => {
    e.addEventListener("click", function () {
        modalReportLive.style.display = "none";
    });
})

// bits
let Anna = document.getElementById('Anna')
let btnFinalBits = document.querySelectorAll("#btnFinalBits")
let modalBits = document.querySelector("#modalBits")
btnFinalBits.forEach(e => {
    e.addEventListener("click", () => {
        modalBits.style.display = 'block'
        const txt = document.createTextNode(e.value)
        Anna.appendChild(txt)
    })
})

var closeModalButton = document.querySelectorAll("#closeModal4");
closeModalButton.forEach(e => {
    e.addEventListener("click", function () {
        modalBits.style.display = "none";
    });
})

// bits donate
let bitDonates = document.querySelectorAll("#bitsDonate")
bitDonates.forEach(e => {
    e.addEventListener("click", function () {
        var bitsDonate = document.querySelector(".bits-donate");
        if (bitsDonate.style.display === "none" || bitsDonate.style.display === "") {
            bitsDonate.style.display = "block";
        } else {
            bitsDonate.style.display = "none";
        }
    });
});

// modal edit schedule
let editSchedule = document.querySelectorAll("#editSchedule")
let modalEditSchedule = document.querySelectorAll("#modalEditSchedule")
editSchedule.forEach(e => {
    e.addEventListener("click", () => {
        modalEditSchedule.forEach(e => {
            e.style.display = 'block';
        })
    })
})

var closeModalButton = document.querySelectorAll("#closeModal5");
closeModalButton.forEach(e => {
    e.addEventListener("click", function () {
        modalEditSchedule.forEach(e => {
            e.style.display = 'none';
        })
    });
})

// modal sort by detail category
let sortByInDetailCate = document.querySelectorAll("#sortByInDetailCate")
let sortByMenu = document.querySelector(".sort-by-menu")

sortByInDetailCate.forEach(e => {
    e.addEventListener("click", () => {
        if (sortByMenu.style.display === "none" || sortByMenu.style.display === "") {
            sortByMenu.style.display = "block";
        } else {
            sortByMenu.style.display = "none";
        }
    })
})

// modal subrice live
let subcribeLive = document.querySelectorAll("#subcribeLive")
let modalSubcribeLive = document.querySelectorAll("#modalSubcribeLive")

let closeModalSubcribeLive = document.querySelectorAll("#closeModalSubcribeLive")

subcribeLive.forEach(e => {
    e.addEventListener("click", () => {
        modalSubcribeLive.forEach(e => {
            e.style.display = 'block'
        })
    })
})

closeModalSubcribeLive.forEach(e => {
    e.addEventListener("click", () => {
        modalSubcribeLive.forEach(e => {
            e.style.display = 'none'
        })
    })
})

// toggle stream chat
let toggleStreamChat = document.querySelectorAll("#toggleStreamChat")
let streamChat = document.querySelector("#streamChat")
let streamLive = document.querySelectorAll("#streamLive")
let toggleStreamLive = document.querySelectorAll("#toggleStreamLive")

toggleStreamChat.forEach(e => {
    e.addEventListener("click", () => {
        streamChat.style.display = 'none'
        streamLive.forEach(e => {
            e.classList.toggle("l-7")
            e.classList.toggle("l-10")
        })
        toggleStreamLive.forEach(e => {
            e.style.display = 'block'
        })
    })
})

toggleStreamLive.forEach(e => {
    e.addEventListener("click", () => {
        streamChat.style.display = 'block'
        streamLive.forEach(e => {
            e.classList.toggle("l-7")
            e.classList.toggle("l-10")
        })
        toggleStreamLive.forEach(e => {
            e.style.display = 'none'
        })
    })
})

// toggle nav
let toggleNavChannel = document.querySelectorAll("#toggleNavChannel")
let navFixed1 = document.querySelectorAll("#navFixed1")
let navFixed2 = document.querySelectorAll("#navFixed2")

toggleNavChannel.forEach(e => {
    e.addEventListener("click", () => {
        navFixed1.forEach(e => {
            e.style.display = 'none'
        })

        navFixed2.forEach(e => {
            e.style.display = 'block'
        })

        streamLive.forEach(e => {
            e.classList.toggle("l-7")
            e.classList.toggle("content-fixed")
        })

        //
        streamLive.forEach(e => {
            e.classList.toggle("l-8-v2")
            e.classList.toggle("content-fixed-2")
        })
    })
})

let toggleNavChannel2 = document.querySelectorAll("#toggleNavChannel2")
toggleNavChannel2.forEach(e => {
    e.addEventListener("click", () => {
        navFixed1.forEach(e => {
            e.style.display = 'block'
        })

        navFixed2.forEach(e => {
            e.style.display = 'none'
        })

        streamLive.forEach(e => {
            e.classList.toggle("l-7")
            e.classList.toggle("content-fixed")
        })

        //
        streamLive.forEach(e => {
            e.classList.toggle("l-8-v2")
            e.classList.toggle("content-fixed-2")
        })
    })
})

// channel_2
let editChannel2 = document.querySelectorAll("#editChannel2")
let modalChannel2 = document.querySelector("#modalChannel2")
let closeModal4 = document.querySelectorAll("#closeModal4")

editChannel2.forEach(e => {
    e.addEventListener("click", () => {
        modalChannel2.style.display = "block"
    })
})

closeModal4.forEach(e => {
    e.addEventListener("click", () => {
        modalChannel2.style.display = "none"
    })
})

// wallet
let walletAnna = document.querySelectorAll("#walletAnna")
walletAnna.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/wallet"
    })
})

let walletPaymentHistory = document.querySelectorAll("#walletPaymentHistory")
walletPaymentHistory.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/historySubcriber"
    })
})

let walletAnnaHistory = document.querySelectorAll("#walletAnnaHistory")
walletAnnaHistory.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/historyPurchase"
    })
})

// user
let userProfile = document.querySelectorAll("#userProfile")
userProfile.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/setting/profile"
    })
})

let userChannel = document.querySelectorAll("#userChannel")
userChannel.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/Name"
    })
})

// detail avt
let detailAvt = document.querySelectorAll("#detailAvt")
detailAvt.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/detail"
    })
})

let detailAvtSchedule = document.querySelectorAll("#detailAvtSchedule")
detailAvtSchedule.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/detailschedule"
    })
})

let detailAvtVideo = document.querySelectorAll("#detailAvtVideo")
detailAvtVideo.forEach(e => {
    e.addEventListener("click", () => {
        location.href = "/detailvideo"
    })
})

// toggle layout 2 - 10
let layout2_10 = document.querySelectorAll("#layout2_10")
let navFixedLayout2_10 = document.querySelectorAll("#navFixedLayout2_10")
// let contentLayout2_10 = document.querySelectorAll("#contentLayout2_10")

// let contentLayout2_10 = document.querySelectorAll("#contentLayout2_10")
// contentLayout2_10.forEach(e => {
//     e.addEventListener("click", () => {
//         location.href = "/channel_2.html"
//     })
// })

let toggleLayout2_10 = document.querySelectorAll("#toggleLayout2_10")
toggleLayout2_10.forEach(e => {
    e.addEventListener("click", () => {
        layout2_10.forEach(e => {
            e.style.display = 'none'
        })

        navFixedLayout2_10.forEach(e => {
            e.style.display = 'block'
        })

        contentLayout2_10.forEach(e => {
            e.classList.toggle("l-10")
            e.classList.toggle("content-fixed")

            e.classList.toggle("l-11-v2")
            e.classList.toggle("content-fixed-layout-2-10")
        })
    })
})

let toggleLayout2_10Back = document.querySelectorAll("#toggleLayout2_10Back")
toggleLayout2_10Back.forEach(e => {
    e.addEventListener("click", () => {
        layout2_10.forEach(e => {
            e.style.display = 'block'
        })

        navFixedLayout2_10.forEach(e => {
            e.style.display = 'none'
        })

        contentLayout2_10.forEach(e => {
            e.classList.toggle("l-10")
            e.classList.toggle("content-fixed")

            e.classList.toggle("l-11-v2")
            e.classList.toggle("content-fixed-layout-2-10")
        })
    })
})

// setting security edit username
let editUsernameSecurity = document.querySelectorAll("#editUsernameSecurity")

let formDefaultUsernameSettingSecurity = document.querySelectorAll("#formDefaultUsernameSettingSecurity")
let formEditUsernameSettingSecurity = document.querySelectorAll("#formEditUsernameSettingSecurity")

let cancelEditUsernameSettingSecurity = document.querySelectorAll("#cancelEditUsernameSettingSecurity")

editUsernameSecurity.forEach(e => {
    e.addEventListener("click", () => {
        formDefaultUsernameSettingSecurity.forEach(e => {
            e.style.display = 'none'
        })

        formEditUsernameSettingSecurity.forEach(e => {
            e.style.display = 'block'
        })
    })
})

cancelEditUsernameSettingSecurity.forEach(e => {
    e.addEventListener("click", () => {
        formDefaultUsernameSettingSecurity.forEach(e => {
            e.style.display = 'block'
        })

        formEditUsernameSettingSecurity.forEach(e => {
            e.style.display = 'none'
        })
    })
})

// setting security edit phone number
let addNumberSettingSecu = document.querySelectorAll("#addNumberSettingSecu")

let defaultPhoneNumberSettingSecu = document.querySelectorAll("#defaultPhoneNumberSettingSecu")
let formAddPhoneSettingSecu = document.querySelectorAll("#formAddPhoneSettingSecu")

let cancelAddPhoneSettingSecu = document.querySelectorAll("#cancelAddPhoneSettingSecu")

addNumberSettingSecu.forEach(e => {
    e.addEventListener("click", () => {
        defaultPhoneNumberSettingSecu.forEach(e => {
            e.style.display = 'none'
        })

        formAddPhoneSettingSecu.forEach(e => {
            e.style.display = 'block'
        })
    })
})

cancelAddPhoneSettingSecu.forEach(e => {
    e.addEventListener("click", () => {
        defaultPhoneNumberSettingSecu.forEach(e => {
            e.style.display = 'block'
        })

        formAddPhoneSettingSecu.forEach(e => {
            e.style.display = 'none'
        })
    })
})

// modal edit password
let enableChangePassword = document.querySelectorAll("#enableChangePassword")
let closeModalEditpassword = document.querySelectorAll("#closeModalEditpassword")

let modalEditPassword = document.querySelectorAll("#modalEditPassword")

enableChangePassword.forEach(e => {
    e.addEventListener("click", () => {
        modalEditPassword.forEach(e => {
            e.style.display = 'block'
        })
    })
})

closeModalEditpassword.forEach(e => {
    e.addEventListener("click", () => {
        modalEditPassword.forEach(e => {
            e.style.display = 'none'
        })
    })
})

// toggle type input edit password
let eyeOpenPassword = document.querySelectorAll("#eyeOpenPassword")
let eyeClosePassword = document.querySelectorAll("#eyeClosePassword")

let inputEditPassword = document.querySelectorAll("#inputEditPassword")

eyeOpenPassword.forEach(e => {
    e.addEventListener("click", () => {
        inputEditPassword.forEach(e => {
            e.type = 'text'
        })

        e.style.display = 'none'

        eyeClosePassword.forEach(e => {
            e.style.display = 'block'
        })
    })
})

eyeClosePassword.forEach(e => {
    e.addEventListener("click", () => {
        inputEditPassword.forEach(e => {
            e.type = 'password'
        })

        e.style.display = 'none'

        eyeOpenPassword.forEach(e => {
            e.style.display = 'block'
        })
    })
})

// 
var show = true;
function showCheckboxes() {
    var checkboxes =
        document.getElementById("checkBoxes");

    if (show) {
        checkboxes.style.display = "block";
        show = false;
    } else {
        checkboxes.style.display = "none";
        show = true;
    }
}

// setting live
let settingLive = document.querySelectorAll("#settingLive")
let bodySettingLive = document.querySelectorAll("#bodySettingLive")
settingLive.forEach(e => {
    e.addEventListener("click", () => {
        bodySettingLive.forEach(e => {
            if (e.style.display === "none" || e.style.display === "") {
                e.style.display = "block";
            } else {
                e.style.display = "none";
            }
        })
    })
})

// click volume
let volumne = document.querySelectorAll("#volumne")
let mute = document.querySelectorAll("#mute")
let rangeVolume = document.querySelectorAll("#rangeVolume")
volumne.forEach(e => {
    e.addEventListener("click", () => {
        rangeVolume.forEach(e => {
            if (e.style.display === "none" || e.style.display === "") {
                e.style.display = "block";
            } else {
                e.style.display = "none";
            }
        })
    })
})

// 
const currentDate = new Date();
const dateString = currentDate.toISOString().slice(0, 10);

const dateNow = document.querySelectorAll("#dateNow")
dateNow.forEach(e => {
    e.value = dateString
})

// modal creator_dashboard
const openModalBtn = document.querySelectorAll("#modalCretor");
const closeModalBtn = document.querySelectorAll("#closeModalBtnCreator");
const overlay = document.querySelectorAll("#overlay");
const modalCreator = document.querySelectorAll("#modal");

openModalBtn.forEach(e => {
    e.addEventListener("click", function () {
        openModal();
    });
})

closeModalBtn.forEach(e => {
    e.addEventListener("click", function () {
        closeModal();
    });
})

overlay.forEach(e => {
    e.addEventListener("click", function () {
        closeModal();
    });
})

function openModal() {
    overlay.forEach(e => {
        e.style.display = "block";
    })
    modalCreator.forEach(e => {
        e.style.display = "block";
    })
}

function closeModal() {
    overlay.forEach(e => {
        e.style.display = "none";
    })
    modalCreator.forEach(e => {
        e.style.display = "none";
    })
}