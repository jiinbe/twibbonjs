let song;

function preload() {
  // we have included both an .ogg file and an .mp3 file
  soundFormats('ogg', 'mp3');

  // if mp3 is not supported by this browser,
  // loadSound will load the ogg file
  // we have included with our sketch
  song = loadSound('https://intifada.pages.dev/seventeen.mp3');
}

function setup() {
//  createCanvas(0, 0);
    canvas.style.display = "none";

  // song loaded during preload(), ready to play in setup()
  song.play();
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
//    song.pause();
  } else {
    song.play(); // playback will resume from the pause position
  }
}
