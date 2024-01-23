function startAudio() {
  var customAudio = document.getElementById("customAudio");
  var playButton = document.getElementById("playButton");

  // Hide the play button
  playButton.style.display = "none";

  // Start playing the audio
  customAudio.play();
}
