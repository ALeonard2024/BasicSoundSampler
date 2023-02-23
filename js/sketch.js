
let sounds = new Tone.Players({
  "trumpet": "sounds/trumpet.wav",
  "orchestra": "sounds/orchestra.wav",
  "whoosh": "sounds/whoosh.wav",
  "flute": "sounds/flute.wav",
})

const delay = new Tone.FeedbackDelay("8n", 0.5);

let soundNames = ["trumpet", "orchestra", "whoosh", "flute"];
let buttons = [];

let dSlider;

function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index, index*50);
    buttons[index].mousePressed( () => buttonSound(word))
  })

  dSlider = createSlider(0., 1., 0.5, 0.05);
  dSlider.mouseReleased( () => {
    delay.delayTime.value = dSlider.value();
  })
}

function draw() {
  background(22, 128, 18);
  text('Click button for sound!!!!!', 0, 200)
  text('Adjust slider for the amount of echo! (Delay)', 0, 350);

}

function buttonSound(whichSound) {
    sounds.player(whichSound).start();
}