import { MediaPlayer } from "dashjs";

function init() {
  var video,
      player,
      url = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";

  video = document.querySelector("video");
  player = MediaPlayer().create();
  player.initialize(video, url, false);

  function onClick() {
    player.reset();
    player = MediaPlayer().create();
    player.initialize(video, url, false);
  }

  var button = document.createElement('button')
  button.innerHTML = 'Recreate';
  button.addEventListener('click', onClick);
  document.body.appendChild(button);
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});