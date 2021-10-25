function findCommonChars(word1, word2) {
   let commonChars = "";
   for(let i = 0; i < word2.length; i++) {
      if(word1.toLowerCase().includes(word2[i].toLowerCase())) {
         commonChars += word2[i] + ", " ;
      }
   }

console.log("Common letters: " + commonChars);
}

findCommonChars("Umuzi", "Maji");
