function vowelFinder(word) {
    let vowels = "";
    word = word.toLowerCase();
    for(var i = 0; i < word.length; i++) {
        if(word.indexOf("a") === i || word.indexOf("e") === i || word.indexOf("i") === i || word.indexOf("o") === i ||word.indexOf("u") === i) {
            vowels += word[i] + ", ";
        }
    }
    console.log("Vowels: " + vowels)
}
vowelFinder("umuzi");

