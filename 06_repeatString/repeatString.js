const repeatString = function(word,num) {
    let string = "";
    for(let i = 0; i < num; i++) {
        string += word
    }
    return string
};

repeatString('hello', 10)

// Do not edit below this line
module.exports = repeatString;
