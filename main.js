// NodeJs method to turn txt file into array
// var fs = require("fs");
// var text = fs.readFileSync("./proverbs.txt").toString('utf-8');
// var textByLine = text.split("\n")

// This app only works on live server. You get Access errors without it.

import { proverbList } from './proverbs.js';

const buttonElement = document.getElementById('generateButton');
const pElement = document.getElementById('proverb');

function generateCookie() {
    var randomIndex = Math.floor(Math.random() * proverbList.length);
    return proverbList[randomIndex];
}

function insertProverb() {
    var proverb = generateCookie();
    pElement.innerHTML = proverb;
}

buttonElement.addEventListener('click', insertProverb);
