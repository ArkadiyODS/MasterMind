/* Function receive "code" (Number) and "guess" (Number) and returns object "pattern" with two properties: "B" (black) with amount of digits on the right place,
and "W" (white) with amount of matching digits, but on the wrong places
*/

function PatternMatcher(code, guess){
 var pattern = {},
 remains = {},
 remainsArr = [],
 codeArr = [];

  do{
    codeArr.unshift(code % 10);
    code = Math.floor(code/10);
  }while(code > 0);

  pattern.B = 0;
  pattern.W = 0;

  for (var i = codeArr.length - 1; i >= 0; i--) {
      var digit = guess % 10;
      guess = Math.floor(guess / 10);
      if(digit == codeArr[i]) {
        pattern.B++;
        codeArr.splice(i, 1);
      }
      else remainsArr.push(digit);
  }

  for (var j = 0; j < remainsArr.length ; j++) {
       for (var i = codeArr.length - 1; i >= 0; i--) {
         if(codeArr[i] == remainsArr[j]){
          pattern.W++;
          codeArr.splice(i, 1);
          break;
         }
       }
    }

  return pattern;
}
