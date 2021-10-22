function findCommonChars(word1, word2) {
   let commonChars=[];
   let count = 0;
   const obj = word2.split("");
   for(const str of word1) {
      let indice = obj.findIndex(s => s === str);
      if(indice >=0){
         commonChars.push(obj.find(s => s === str));
         count++
         obj.splice(indice,1);
      }
   }
console.log(commonChars);
}

findCommonChars("umuzi", "uvumilivu");
