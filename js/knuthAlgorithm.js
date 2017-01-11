/* Function uses KnuthAlgorithm to choose right guess withing minimum amount of attempts. Receives "code" (Number) and "allowedAttempts" (Number),
returns complicated object with fields "guess" (Number), "attempt"(Number) and "allGuesse" (Array)
*/
function KnuthAlgorithm(code, allowedAttempts){
  var attempt = 1,
  allGuesses = [];
  guess = 1122,
  set = SetCreator();
  pattern = PatternMatcher(code, guess); 
  while (pattern.B != 4 && attempt <= allowedAttempts) { 
    allGuesses.push({guess: guess, pattern: pattern});
    set = SetReducer(set, pattern, guess);
    guess = set[0];
    pattern = PatternMatcher(code, guess);
    attempt++;
  } 
  return {guess: guess, attempt: attempt, allGuesses: allGuesses};
}
