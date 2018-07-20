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
  var total=0;
  var nil=0;
  $('button#roll-1').click(function(){
    var roll=Math.floor(Math.random()*6)+1;
    $('#dice-roll-1').text(roll);
    var rollvalue=roll;
    total+=rollvalue;
    if (rollvalue===1) {
      alert('your turn is over')
      $('#round-1').text(nil);
    }else {
      $('#round-1').text(total);
    }
  })
  var total = 0;
  var nil = 0;
  $('button#roll-2').click(function(){
    var roll=Math.floor(Math.random()*6)+1;
    $('#dice-roll-2').text(roll);
    var rollvalue=roll;
    total+=rollvalue;
    // $('#round-2').text(total);
    if (rollvalue===1) {
      alert('your turn is over')
      $('#round-2').text(nil);
    }else {
      $('#round-2').text(total);
    }
  })
  // $('button#hold-1').click(function(){
  //   var total=+rollvalue;
  //   $('#total-1').text(total);
  // })

  // //formula for rolling the dice
  // var diceroll=function(){
  //   return Math.floor(6*Math.random())+1;
  // }
  // //creating a constructor for the players
  // function Player(turn){
  //   this.roll=0;
  //   this.rollvalue=0;
  //   this.totalscore=0;
  //   this.turn=turn;
  //   this.name;
  // }
  // //if the player rolls a 1
  // Player.prototype.one=function(){
  //   if(this.roll===1){
  //     this.rollvalue=0;
  //     return('your turn is over')
  //   }else {
  //     this.rollvalue +=this.roll;
  //   }
  // }
  // //when the player presses hold
  // Player.prototype.hold=function(){
  //   this.totalscore+=this.rollvalue;
  //   this.rollvalue=0;
  //   return('your turn is over');
  // }
  // //winning the game
  // Player.prototype.winner=function(){
  //   if (this.totalscore>=50) {
  //     alert(this.name +'you won!!');
  //   }
  // }
  // player1=new Player();
  // player2=new Player();
  // //the first player rolling the dice
  // $('button#roll-1').click(function(){
  //   player1=diceroll();
  //   $('dice-roll-1').text(throwingDice);
  // })
})
