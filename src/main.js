import { MediaPlayer } from "dashjs";

function init() {
  var video,
      player,
      url = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";

  video = document.querySelector("video");
  player = MediaPlayer().create();
  player.initialize(video, url, false);
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});