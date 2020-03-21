// Made by Albert Vu
var img;
var text = "Click and hold the mouse button";

function preload() {
	img = loadImage("mozart.jpg");
}


function startContext() {
	console.log("Tone is: ", Tone.context.state)
	document.body.addEventListener("click", () => {
		Tone.context.resume();
		console.log("Tone is: ", Tone.context.state);
	});
}

startContext();


function setup() {
	createCanvas(800, 800);
	background(255);
	imageMode(CENTER);
}

function mousePressed() {
	// instrument with built in envelope and lfo filter
	// filter not that useful for this song
	var synth = new Tone.MonoSynth({
		detune: 0,
		"oscillator": {
			"type": "sine"
		},
		"filter": {
			Q: 4,
			type: "lowpass",
			rolloff: -24
		},
		"envelope": {
			"attack": 0.1,
			"decay": .1,
			"release": .1
		}
	}).toMaster();

	// scheduling using + parameter
	synth.triggerAttackRelease("E4", "8n");
	synth.triggerAttackRelease("D#4", "8n", "+.25");
	synth.triggerAttackRelease("E4", "8n", "+.50");
	synth.triggerAttackRelease("D#4", "8n", "+.75");
	synth.triggerAttackRelease("E4", "8n", "+1");
	synth.triggerAttackRelease("B3", "8n", "+1.25");
	synth.triggerAttackRelease("D4", "8n", "+1.5");
	synth.triggerAttackRelease("C4", "8n", "+1.75");
	synth.triggerAttackRelease("A3", "2n", "+2");
	image(img, 0, 0, img.width / 2, img.height / 2);
}

function mouseReleased() {
	background(255);
}

function draw() {
	fill(255);
	textSize(24);
	stroke(0);
	fill(0);
	text("Click and hold the mouse to hear Fur Elise", 30, 30);
}