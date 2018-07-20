$(document).ready(function(){
  $("button#begin").click(function(event){
    $('#registration').hide();
    $('#play-side').show();

  var playerA=$('input#player1name').val();
  var playerB=$('input#player2name').val();
  $('.player1name').text(playerA);
  $('.player2name').text(playerB);
})
})
