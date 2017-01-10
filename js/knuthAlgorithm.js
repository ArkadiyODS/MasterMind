function KnuthAlgorithm(code, allowedAttempts){
  var attempt = 1,
  guess = 1122,
  set = SetCreator();
  pattern = PatternMatcher(code, guess);

  while (pattern.B != 4 && attempt <= allowedAttempts) {
    set = SetReducer(set, pattern, guess);
    guess = set[0];
    pattern = PatternMatcher(code, guess);
    attempt++;
  } 
  return {guess: guess, attempt: attempt};
}
