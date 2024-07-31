document.getElementById('setSpeed').addEventListener('click', () => {
  const speed = parseFloat(document.getElementById('speed').value);
  if (speed >= 0.1 && speed <= 5) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: setPlaybackSpeed,
        args: [speed]
      });
    });
  } else {
    alert('Speed must be between 0.1 and 5');
  }
});

function setPlaybackSpeed(speed) {
  const videos = document.querySelectorAll('.html5-main-video');
  videos.forEach(video => video.playbackRate = speed);
}
