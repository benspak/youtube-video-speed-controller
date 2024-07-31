function setPlaybackSpeed(speed) {
  const videos = document.querySelectorAll('.html5-main-video');
  videos.forEach(video => video.playbackRate = speed);
}
