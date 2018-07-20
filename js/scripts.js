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
  //the first player rolling the dice
  $('button#roll-1').click(function(){
    throwingDice=diceroll();
    $('dice-roll-1').text(throwingDice);
  })
})
