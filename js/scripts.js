$(document).ready(function(){
  $("button#begin").click(function(event){
    $('#registration').hide();
    $('#play-side').show();

  var playerA=$('input#player1name').val();
  var playerB=$('input#player2name').val();
  $('.player1name').text(playerA);
  $('.player2name').text(playerB);
})
  $('button#newgame').click(function(){
    $('#play-side').hide();
    $('#registration').show();

    //emptying the values
    $('#dice-roll-1').empty();
    $('#round-1').empty();
    $('#total-1').empty();
    $('#dice-roll-2').empty();
    $('#round-2').empty();
    $('#total-2').empty();
  })
  //formula for rolling the dice
  var diceroll=function(){
    return Math.floor(6*Math.random())+1;
  }
  //creating a constructor for the players
  function Player(turn){
    this.roll=0;
    this.rollvalue=0;
    this.totalscore=0;
    this.turn=turn;
    this.name;
  }
  //if the player rolls a 1
  Player.prototype.one=function(){
    if(this.roll===1){
      this.rollvalue=0;
      return('your turn is over')
    }else {
      this.rollvalue +=this.roll;
    }
  }
  //when the player presses hold
  Player.prototype.hold=function(){
    this.totalscore+=this.rollvalue;
    this.rollvalue=0;
    return('your turn is over');
  }
  //winning the game 
  Player.prototype.winner=function(){
    if (this.totalscore>=50) {
      alert(this.name +'you won!!');
    }
  }
  //the first player rolling the dice
  $('button#roll-1').click(function(){
    throwingDice=diceroll();
    $('dice-roll-1').text(throwingDice);
  })
})
