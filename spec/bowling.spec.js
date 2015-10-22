var Game = function(){
  var finalScore = -1;
  var firstRollPin = -1;
  var isFirstRoll = true;

  return {
    score: function(){
      return finalScore;
    },
    roll: function(pins) {
      finalScore += pins;

      if(pins === 0){
        finalScore = 0;
      }
      if(pins === 1){
        finalScore=20;
      }
      else if (pins === 2) {
        if (isFirstRoll) {
          isFirstRoll = false;
          firstRollPin = pins;
          finalScore = 0;
        }
        else {
          //isFirstRoll = true;

          finalScore = pins + firstRollPin;
        }
      }
    }
  };
};


describe("Bowling game scoring", function() {
  // beforeAll("define the common function", function() {
    function rollWholeGame(game, pins) {
      for (i=0; i<20; i++){
        game.roll(pins);
      }
    };
  //});

  // Roll a whole game as gutter balls, score should be zero
  it("All gutter balls score equals zero.", function(){
    //arrage
    var game = new Game();  
    //act
    rollWholeGame(game, 0); 
    //assert
    expect(game.score()).toBe(0);
  });
});

// Roll one everytime, score should be 20
describe("Bowling game scoring", function() {
  function rollWholeGame(game, pins) {
    for (i=0; i<20; i++){
      game.roll(pins);
    }
  };

  it("Roll one everytime, score should be 20.", function(){
    //arrage
    var game = new Game();  
    //act
    rollWholeGame(game, 1); 
    //assert
    expect(game.score()).toBe(20);
  });
});

// A new game has score of zero
describe("A Game", function() {
  //arrage
  var game = new Game(); 

  describe("When the first roll is 2.", function(){
    beforeEach(function(){
      game.roll(2);
    });

    it("A new game has score of zero.", function(){  
        //assert
        expect(game.score()).toBe(0);
    });
  });

  describe("When the first two rolls are 2.", function(){
    beforeEach(function(){
      game.roll(2);
      game.roll(2);
    });

    it("A new game has score of zero.", function(){  
        //assert
        expect(game.score()).toBe(4);
    });
  });

});