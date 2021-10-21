function vowelFinder(word) {
    var word = prompt("enter a random word to isolate it's vowels");
    const vowels = word.match(/[aeiou]/gi)
    console.log("Vowels: " + vowels);

}
