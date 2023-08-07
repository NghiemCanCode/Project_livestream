const btnPlay = document.getElementById("play");
const btnPause = document.getElementById("pause");
const btnZoom= document.getElementById('zoom');
const videoPlayer= document.getElementById('video-player')
const btnVolume= document.getElementById('volume')
const btnMute= document.getElementById('mute')
const btnRange= document.getElementById('rangeVolume')
const btnSetting = document.getElementById('settingLive')
const settingsMenu = document.getElementById("settings-menu");
const mainLive = document.getElementById('videoLive')
const player = IVSPlayer.create();
const playbackURL = document.getElementById('playbackURL')

player.attachHTMLVideoElement(document.getElementById('video-player'));
player.load(playbackURL.value);
player.play();
// player.setVolume(1.0);
// player.setMuted(false);
// player.addEventListener(PlayerState.PLAYING, function () {
//     console.log("Player State - PLAYING");
//     });
// player.addEventListener(PlayerState.ENDED, function () {
//     console.log("Player State - ENDED");
// });
// player.addEventListener(PlayerState.READY, function () {
//     console.log("Player State - READY");
// });
// player.addEventListener(PlayerEventType.ERROR, function (err) {
//     console.warn("Player Event - ERROR:", err);
// });
    
// player.addEventListener(PlayerEventType.TEXT_METADATA_CUE, function (cue) {
//     const metadataText = cue.text;
//     const position = player.getPosition().toFixed(2);
//     console.log(
//         `Player Event - TEXT_METADATA_CUE: "${metadataText}". Observed ${position}s after playback started.`
//     );
// });
// const chatForm= document.querySelector('#chat-form');
// const chatMess= document.querySelector('#chat-mess');
// chatForm.addEventListener(, (e)=>{
//   e.preventDefault();
//   const msg =chatMess.value
//   socket.emit('on-chat',{msg: msg})
// });
btnPlay.addEventListener('click', function () {
    btnPlay.style.display = 'none';
    btnPause.style.display = 'block';
    player.play();
})

btnPause.addEventListener('click', function () {
    player.pause();
    btnPlay.style.display = 'block';
    btnPause.style.display = 'none';
})

btnZoom.addEventListener('click', function (){
    if(document.fullscreenElement == null){
        videoPlayer.requestFullscreen()
    }else{
        document.exitFullscreen()
    }
})
btnVolume.addEventListener('mouseenter', function () {
    btnRange.style.display = "block";
})
btnVolume.addEventListener('mouseleave', function(){
    btnRange.style.display = 'none';
})
btnRange.addEventListener('mouseenter', function () {
    btnRange.style.display = "block";
})
btnRange.addEventListener('mouseleave', function(){
    btnRange.style.display = 'none';
})
btnRange.addEventListener('input', e => {
    console.log(e.target.value);
   player.setVolume(parseFloat(e.target.value));
   if(e.target.value==0){
    btnVolume.style.display = 'none';
    btnMute.style.display = 'block';
   }else {
    btnVolume.style.display = 'block';
    btnMute.style.display = 'none';
   }
} )

btnVolume.addEventListener('click', function () {
    btnVolume.style.display = 'none';
    btnMute.style.display = 'block';
    player.setMuted(true)
    console.log(player.getVolume());
})
btnMute.addEventListener('click', function () {
    btnVolume.style.display = 'block';
    btnMute.style.display = 'none';
    player.setMuted(false);
    console.log(player.getVolume());
})
// btnSetting.addEventListener('click', function () {
//     if(settingsMenu.style.display==='none'){
//         settingsMenu.style.display = 'block';
//     }
//     else{
//         settingsMenu.style.display='none';
//     }
// })

// const Quality = document.getElementById('Source-Quality');
// Quality.addEventListener('click', function(e){
// })
//Create Quality Options
let createQualityOptions = function (obj, i) {
    let q = document.createElement("a");
    let qText = document.createTextNode(obj.name);
    settingsMenu.appendChild(q);
    q.classList.add("settings-menu-item");
    q.appendChild(qText);

    q.addEventListener("click", (event) => {
      player.setQuality(obj);
      settingsMenu.style.display='none';
      return false;
    });
  };

  // Settings
  btnSetting.addEventListener(
    "click",
    function (e) {
      let qualities = player.getQualities();
      let currentQuality = player.getQuality();

      // Empty Settings menu
      while (settingsMenu.firstChild)
        settingsMenu.removeChild(settingsMenu.firstChild);

      if (settingsMenu.style.display==='none') {
        for (var i = 0; i < qualities.length -1 ; i++) {
          createQualityOptions(qualities[i], i);
        }
        settingsMenu.style.display='block'
      } else {
        settingsMenu.style.display='none';
      }
    },
    false
  );
