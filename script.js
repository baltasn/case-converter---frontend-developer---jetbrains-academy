
let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");
let saveFileButton = document.getElementById("save-text-file");
let clearButton = document.getElementById("clear-text");
let textBox = document.getElementById("myTextArea");



upperCaseButton.addEventListener("click", upperCase);
lowerCaseButton.addEventListener("click", lowerCase);
properCaseButton.addEventListener("click", properCase);
sentenceCaseButton.addEventListener("click", sentenceCase);
saveFileButton.addEventListener("click", downloadFile);
clearButton.addEventListener("click", clearTextArea);


function upperCase() {
  textBox.value = convertToUpperCase(getTextFromTextBox());
}
function lowerCase(){
  textBox.value = convertToLowerCase(getTextFromTextBox());
}
function properCase() {
  textBox.value = convertToProperCase(convertToLowerCase(getTextFromTextBox()));
}
function sentenceCase() {
  textBox.value = convertToSentenceCase(convertToLowerCase(getTextFromTextBox()));
}
function clearTextArea() {
  textBox.value = '';
}
function downloadFile() {
  download("text.txt", getTextFromTextBox())
}

function getTextFromTextBox() {
  return textBox.value;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function convertToLowerCase(text) {
  return text.toLowerCase();
}

//Does not handle symbols before words
function convertToProperCase(text) {
  let properCaseText = "";
  let wordsArray = text.split(/(\s)/);
  for (let i = 0; i < wordsArray.length; i++) {
    properCaseText = properCaseText + replaceFirstLetterWithCaps(wordsArray[i]);
  }
  return properCaseText;
}

function replaceFirstLetterWithCaps(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}



// function convertToProperCase(text) {
//   let charactersArray = text.split('');
//   let isAfterSpace = true;
//   for (let i = 0; i < charactersArray.length; i++) {
//     if (isAfterSpace && isLetter(charactersArray[i])) {
//       charactersArray[i] = charactersArray[i].toUpperCase();
//       isAfterSpace = false;
//     } else if (/\s/.test(charactersArray[i]) || !isLetter(charactersArray[i])) {
//         isAfterSpace = true;
//     }
//   }
//   return charactersArray.join('');
// }


function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}


function convertToSentenceCase(text) {
  let charactersArray = text.split('');
  let isAfterPeriod = true;
  for (let i = 0; i < charactersArray.length ; i++) {
    if (isAfterPeriod && isLetter(charactersArray[i])) {
      charactersArray[i] = charactersArray[i].toUpperCase();
      isAfterPeriod = false;
    } else if (charactersArray[i] == '.' ||charactersArray[i] == '?' ) {
      isAfterPeriod = true;
    }
  }
  return charactersArray.join('');
}

//copy-paste from jetbrains
function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}



