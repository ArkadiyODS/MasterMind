// Function creates set of all possible variants among 6 numbers and 4 items in a row (incl repeats)

function SetCreator(){
  var startElement = 1111,
      pattern;
  var set = [];
  for(var a = 0; a < 6; a++){
    for(var b = 0; b < 6; b++){
      for(var i = 0; i < 6; i++){
        pattern = i*10 + b*100 + a*1000;
        for(var j = 1; j <= 6; j++){
          set.push(startElement + pattern++);
        }
      }
    }
  }
  return set;
}
