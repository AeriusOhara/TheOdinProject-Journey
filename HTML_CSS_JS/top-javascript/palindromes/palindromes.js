const palindromes = function(param1) {
    var normal = removeIllegalCharacters(param1).toLowerCase();
    var reverse = "";

    for(var i = (normal.length - 1); i >= 0; i--){
        reverse = reverse + normal[i];
    }

    if(normal == reverse){
        return true;
    }

    return false;
}

function removeIllegalCharacters(param1){
    var cleanedString = "";
    
    for(var i = (param1.length - 1); i >= 0; i--){
        if( param1[i] != " " && 
            param1[i] != "," && 
            param1[i] != "." &&
            param1[i] != "!"){
            cleanedString = cleanedString + param1[i];
        }
    }

    return cleanedString;
}

module.exports = palindromes
