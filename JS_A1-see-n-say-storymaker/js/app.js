// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

// DOM for buttons and elements
const speakButton1 = document.querySelector('.button1');
const speakButton2 = document.querySelector('.button2');
const speakButton3 = document.querySelector('.button3');
const speakButton4 = document.querySelector('.button4');
const speakButton5 = document.querySelector('.button5');
const submitButton = document.querySelector('.submit');
const randomButton = document.querySelector('.random');
const randomStory = document.querySelector('.randomStory');

// Variables for counting button clicks
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

// Variables to store text for speech
let textToSpeak1;
let textToSpeak2;
let textToSpeak3;
let textToSpeak4;
let textToSpeak5;

// Arrays for storing word lists
let nounList = ["The turkey", "Mom", "Dad", "The dog","My teacher", "The elephant", "The cat"];
let verbList = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
let adjList = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let nounList1 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let placeList = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

/* Functions
-------------------------------------------------- */

function speakNow(string) {
	const utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */

// Event listener for button 1 click
speakButton1.addEventListener('click', function () {
	// Get the next word from nounList and speak it
	textToSpeak1 = nounList[count1];
	speakNow(textToSpeak1);
	count1++;
	if (count1 == 7) {
		count1 = 0;
	}
});

// Event listener for button 2 click
speakButton2.addEventListener('click', function () {
	// Get the next word from verbList and speak it
	textToSpeak2 = verbList[count2];
	speakNow(textToSpeak2);
	count2++;
	if (count2 == 6) {
		count2 = 0;
	}
});

// Event listener for button 3 click
speakButton3.addEventListener('click', function () {
	// Get the next word from adjList and speak it
	textToSpeak3 = adjList[count3];
	speakNow(textToSpeak3);
	count3++;
	if (count3 == 6) {
		count3 = 0;
	}
});

// Event listener for button 4 click
speakButton4.addEventListener('click', function () {
	// Get the next word from nounList1 and speak it
	textToSpeak4 = nounList1[count4];
	speakNow(textToSpeak4);
	count4++;
	if (count4 == 7) {
		count4 = 0;
	}
});

// Event listener for button 5 click
speakButton5.addEventListener('click', function () {
	// Get the next word from placeList and speak it
	textToSpeak5 = placeList[count5];
	speakNow(textToSpeak5);
	count5++;
	if (count5 == 6) {
		count5 = 0;
	}
});

// Event listener for submit button click
submitButton.addEventListener('click', function () {
	// Generate the final string by concatenating all selected words
	let finalString = textToSpeak1 + " " + textToSpeak2 + " " + textToSpeak3 + " " + textToSpeak4 + " " + textToSpeak5;
	// Speak the final string
	speakNow(finalString);
});

// Event listener for randomize button click
randomButton.addEventListener('click', function () {
	// Generate random indices for selecting words from each list
	let ran1 = Math.floor(Math.random() * 6) + 1;
	let ran2 = Math.floor(Math.random() * 5) + 1;
	let ran3 = Math.floor(Math.random() * 5) + 1;
	let ran4 = Math.floor(Math.random() * 6) + 1;
	let ran5 = Math.floor(Math.random() * 5) + 1;

	// Generate a random story using the randomly selected words
	let randomString = nounList[ran1] + " " + verbList[ran2] + " " + adjList[ran3] + " " + nounList1[ran4] + " " + placeList[ran5];

	// Update the random story text content on the page
	randomStory.textContent = "Output: ";
	randomStory.textContent += randomString;

	// Speak the random story
	speakNow(randomString);
});
