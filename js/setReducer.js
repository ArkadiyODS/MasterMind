/*  Function reduces set of possible variants based on matching to provided pattern.
    Receives "set" (Array), "pattern"(Object with properties "B" and "W"), "guess"(Number).
    Returns "newSet" (Array).
*/
function SetReducer(set, pattern, guess){
  var newSet = [],
  newPattern;

  for (var i = 0; i < set.length; i++) {
    newPattern = PatternMatcher(set[i], guess);
    if(newPattern.W == pattern.W && newPattern.B == pattern.B)
      newSet.push(set[i]);
  }
  return newSet;
}
