// Function returns random integer in requested diapason. Receives "min" (Number) and "max" (Number), returns "rand" (Integer).

function Randomiser(min, max) {
      var rand = min + Math.random() * (max + 1- min)
      return Math.floor(rand);
    }
