function findCommonCharacters(word1, word2) {
   let commonCharacters = "";
   for(let i = 0; i < word2.length; i++) {
      if(word1.toLowerCase().includes(word2[i].toLowerCase())) {
         commonCharacters += word2[i] + ", " ;
      }
   }

console.log("Common letters: " + commonCharacters);
}

findCommonCharacters("Umuzi", "Maji");
