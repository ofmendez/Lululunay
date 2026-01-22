let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    events: {
      onReady: () => {
        player.mute();
      }
    }
  });
}

// Cargar API de YouTube
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

// Botón sonido
const soundBtn = document.getElementById('soundToggle');

soundBtn.addEventListener('click', () => {
  if (player) {
    player.unMute();
    player.setVolume(100);
    soundBtn.classList.add('hidden');
  }
});
