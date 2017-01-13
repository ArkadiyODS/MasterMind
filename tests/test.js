describe("KnuthAlgorithm", function() {

  it("Received code 1111, final guess is 1111 and amount of attempts is less than 10 or equal ", function() {
    var result = KnuthAlgorithm(1111, 10);
    assert(result.guess == 1111 && result.attempt <= 10);
  });

  it("Received code 1234, final guess is 1234 and amount of attempts is less than 10 or equal ", function() {
    var result = KnuthAlgorithm(1234, 10);
    assert(result.guess == 1234 && result.attempt <= 10);
  });

  it("Received code 6666, final guess is 6666 and amount of attempts is less than 10 or equal ", function() {
    var result = KnuthAlgorithm(6666, 10);
    assert(result.guess == 6666 && result.attempt <= 10);
  });

  describe("Test for the series of 10 random games", function(){

    function MakeTest(){
      var testArray = [];
      for (var i = 0; i < 4; i++) {
        testArray.push(Randomiser(1,6));
      }
      var code = parseInt(testArray.join(''));
      var result = KnuthAlgorithm(code, 10);

      it("Received code "+ code + ", final guess is " + result.guess + " and amount of attempts (" + result.attempt + ") is less than 10 or equal ", function() {
        assert(result.guess == code && result.attempt <= 10);
      });
    }
    for (var i = 0; i < 20; i++) {
      MakeTest();
    }
  });
});

describe("SetCreator", function() {
  it("Function creates 1296 possible variants among 6 numbers and 4 items in a row (incl repeats)  ", function() {
    assert.equal(SetCreator().length, 1296);
  });

  it("Sum of all elements in the set equals to 5039496", function() {
    var sum = 0;
    SetCreator().forEach(function(item, i, arr){
        sum +=item;
      });
    assert.equal(sum, 5039496);
  });
});

describe("PatternMatcher", function() {

 it("Function receives code '1214' and guess '2351', the correct pattern is 0B and 2W", function() {
    var p = PatternMatcher(1214, 2351);
    assert(p.B == 0 && p.W == 2);
  });
  
  it("Function receives code '1234' and guess '1122', the correct pattern is 1B and 1W", function() {
    var p = PatternMatcher(1234, 1122);
    assert(p.B == 1 && p.W == 1);
  });

  it("Function receives code '1234' and guess '1234', the correct pattern is 4B and 0W", function() {
    var p = PatternMatcher(1234, 1234);
    assert(p.B == 4 && p.W == 0);
  });

  it("Function receives code '1111' and guess '1234', the correct pattern is 1B and 0W", function() {
    var p = PatternMatcher(1111, 1234);
    assert(p.B == 1 && p.W == 0);
  });

  it("Function receives code '6543' and guess '1111', the correct pattern is 0B and 0W", function() {
    var p = PatternMatcher(6543, 1111);
    assert(p.B == 0 && p.W == 0);
  });

  it("Function receives code '6543' and guess '1234', the correct pattern is 0B and 2W", function() {
    var p = PatternMatcher(6543, 1234);
    assert(p.B == 0 && p.W == 2);
  });

  it("Function receives code '6543' and guess '4444', the correct pattern is 1B and 0W", function() {
    var p = PatternMatcher(6543, 4444);
    assert(p.B == 1 && p.W == 0);
  });


  it("Function receives code '4543' and guess '1444', the correct pattern is 1B and 1W", function() {
    var p = PatternMatcher(4543, 1444);
    assert(p.B == 1 && p.W == 1);
  });
});

describe("Randomiser", function() {
  it("Function returns random integer in diapason from 0 to 10 (10 000 times)", function() {
    var condition = true;
    for (var i = 0; i < 10000; i++) {
      var int = Randomiser(0,10);
      if(int < 0 || int > 10)
        condition = false;
    }
    assert(condition);
  });

  it("Function returns 0 in diapason from 0 to 0", function() {
    assert(Randomiser(0,0) == 0);
  });

});

describe("SetReducer (according to table in below)", function() {
  it("Function reduces set of possible variants to 256 items for guess 1122 and pattern 0B and 0W", function() {
    assert.equal(SetReducer(SetCreator(), {B: 0, W:0}, 1122).length, 256);
  });
  it("Function reduces set of possible variants to 1 items for guess 1122 and pattern 0B and 4W", function() {
    assert.equal(SetReducer(SetCreator(), {B: 0, W:4}, 1122).length, 1);
  });

  it("Function reduces set of possible variants to 0 items for guess 1122 and pattern 3B and 1W", function() {
    assert.equal(SetReducer(SetCreator(), {B: 3, W:1}, 1122).length, 0);
  });

  it("Function reduces set of possible variants to 1 items for guess 1122 and pattern 4B and 0W", function() {
    assert.equal(SetReducer(SetCreator(), {B: 4, W:0}, 1122).length, 1);
  });

  it("Function reduces set of possible variants to 114 items for guess 1122 and pattern 2B and 0W", function() {
    assert.equal(SetReducer(SetCreator(), {B: 2, W:0}, 1122).length, 114);
  });

  it("Function reduces set of possible variants to 96 items for guess 1234 and pattern 2B and 0W", function() {
    assert.equal(SetReducer(SetCreator(), {B: 2, W:0}, 1234).length, 96);
  });

  it("Function reduces set of possible variants to 16 items for guess 1234 and pattern 0B and 0W", function() {
    assert.equal(SetReducer(SetCreator(), {B: 0, W:0}, 1234).length, 16);
  });

});
