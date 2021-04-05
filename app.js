/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable linebreak-style */
const sentence = prompt('Please Enter Your Sentence.');
const sentenceArray = sentence.split('');
const swapSentence = [];
for (const i of sentenceArray) {
  if (i.toUpperCase() == i) {
    swapSentence.push(i.toLowerCase());
  } else {
    swapSentence.push(i.toUpperCase());
  }
}

console.log(swapSentence.join(''));
