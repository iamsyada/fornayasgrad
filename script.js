const bgm = document.getElementById("bgm");

/*
  Browser modern biasanya blok autoplay audio.
  Jadi audio diputar setelah user tap/click.
*/

function playMusic() {
  bgm.play();

  document.removeEventListener("click", playMusic);
  document.removeEventListener("touchstart", playMusic);
}

document.addEventListener("click", playMusic);
document.addEventListener("touchstart", playMusic);
