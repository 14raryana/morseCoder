var morseAlphabet = {
    32: "/",
    65: ".-",
    66: "-...",
    67: "-.-.",
    68: "-..",
    69: ".",
    70: "..-.",
    71: "--.",
    72: "....",
    73: "..",
    74: ".---",
    75: "-.-",
    76: ".-..",
    77: "--",
    78: "-.",
    79: "---",
    80: ".--.",
    81: "--.-",
    82: ".-.",
    83: "...",
    84: "-",
    85: "..-",
    86: "...-",
    87: ".--",
    88: "-..-",
    89: "-.--",
    90: "--.."
}

var morseCodeTranslation = [];
var translatedText = document.getElementById("translatedText");


function hello() {
    var inputText = document.getElementById("inputText").value.toUpperCase();
    // inputText.toUppercase();
    for(var i = 0; i < inputText.length; i++) {
        var shit = inputText.charCodeAt(i);
        // console.log(shit);
        // console.log(morseAlphabet[shit]);
        morseCodeTranslation.push(morseAlphabet[shit]);
    }

    // console.log(morseCodeTranslation.join(" "));
    translatedText.value = morseCodeTranslation.join(" ");
}

