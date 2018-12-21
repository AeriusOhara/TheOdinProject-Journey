
const snakeCase = function(param1) {
    var uncleanString = param1;
}

/*var illegalCharacters = new Array(  ',', '.', '!', 
                                    '?', '[', ']', 
                                    '(', ')', '\'', 
                                    '_', '-', ' ');

const snakeCase = function(param1) {
    var lCaseParam1 = param1.toLowerCase();
    var snakeStringArr = Array();
    var snakeString = "";
    snakeStringArr = separateWords(lCaseParam1);

    for(var i = 0; i < snakeStringArr.length; i++){
        snakeString += snakeStringArr[i];

        if(i < (snakeStringArr.length - 1 )){
            snakeString += "_";
        }
    }

    return snakeString;
}

function separateWords(param1){
    var stringArray = Array();
    var currentWord = "";
    var hasIllegalCharacters = false;
    var wordStart = false;

    for(var i = 0; i < param1.length; i++){
        hasIllegalCharacters = false;

        // Check if there are any characters
        for(var j = 0; j < illegalCharacters.length; j++){
            if(param1[i] == illegalCharacters[j]){
                hasIllegalCharacters = true;
            }
        }

        // Logic, if illegal characters were fund AND we're currently
        // logging a word: push the word into array, if no illegal
        // characters were found and wordStart is set to false, start
        // logging the new word
        if(hasIllegalCharacters == true && wordStart == true){
            // Stop logging the current word and add it to the array
            // and reset the var
            wordStart = false;
            stringArray[stringArray.length] = currentWord;
            currentWord = "";
        }

        if(hasIllegalCharacters == false){
            // Start logging the new word
            wordStart = true;
            currentWord += param1[i];
        }
    }

    // If we were still logging a word by the time we reached the
    // end of the string, add it to the array
    if(wordStart == true){
        stringArray[stringArray.length] = currentWord;
    }
    
    return stringArray;
}

function convertToSnakeCase(param1){

}
*/

module.exports = snakeCase
