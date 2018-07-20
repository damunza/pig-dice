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
  // when the user rolls 1 on the dice
  var total=0;
  var nil=0;
  var sum=0;
  $('button#roll-1').click(function(){
    var roll=Math.floor(Math.random()*6)+1;
    $('#dice-roll-1').text(roll);
    var rollvalue=roll;
    total+=rollvalue;
    sum+=total;
    if (rollvalue===1) {
      alert('your turn is over')
      $('#round-1').text(nil);//makes the round total zero when the rollvalue is 1
      $('#dice-roll-1').text(nil);
    }else {
      $('#round-1').text(total);//returns the total of the round
    }
    $('button#hold-1').click(function(){
    $('#total-1').text(sum);
    alert('not your turn');
    if (sum>=100) {
      alert('you win')
    }
    })
  })
  var total = 0;
  var nil = 0;
  var sum=0;
  $('button#roll-2').click(function(){
    var roll=Math.floor(Math.random()*6)+1;
    $('#dice-roll-2').text(roll);
    var rollvalue=roll;
    total+=rollvalue;
    if (rollvalue===1) {
      alert('your turn is over');
      $('#round-2').text(nil);
      $('#dice-roll-2').text(nil);
    }else {
      $('#round-2').text(total);
    }
    $('button#hold-2').click(function(){
    $('#total-2').text(sum);
    alert('not your turn');
    if (sum>=100) {
      alert('you win')
    }
  })

})


})
