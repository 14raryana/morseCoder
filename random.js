morseAlphabet = {
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
class Morser {
    // constructor(text) {
    //     this.inputText = text.toUpperCase();
    // }
    code(inputText) {
        var morseCodeTranslation = [];
        inputText = inputText.toUpperCase();
        for(var i = 0; i < inputText.length; i++) {
            var asciiCode = inputText.charCodeAt(i);
            morseCodeTranslation.push(morseAlphabet[asciiCode]);
        }

        return morseCodeTranslation.join(" ");
    }

    decode() {

    }
}

module.exports = Morser;