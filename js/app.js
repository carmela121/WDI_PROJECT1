$(document).ready(function() {

  var time = 60*3;
  var timer;
  var $answers = $('#printAnswers');
  var player1 = 0;
  var player2 = 0;
  var player = 1;

  //searches for a match on the country list
  function matchCountry(text) {
    var pinClass = "." + text.toLowerCase().replace(/ /g, "-");
    $('.pin' + pinClass).removeClass('hidden');
    if (countries.indexOf(text.toLowerCase()) !== -1){
      if(player === 1) {
        player1++;
      } else {
        player2++;
      }
      $('.score1').text("player1 "+ player1);
      $('.score2').text("player2 "+ player2);
      // display scores
      // $('#printAnswers').append('<li>' + text + '</li>');
    } else {
      console.log("Sorry, please try again");
    }
  }

 $('#new-country-form').on("submit", function(event) {
    event.preventDefault();
    var text = $("#new-country-input").val();
    console.log(text);
    $("#new-country-input").val("");
    matchCountry(text); 
  });

  function startClock() {
    console.log("start clock");
    var display = $('#screen');

    // text box only shows when timer starts
    $('#new-country-input').removeClass('hidden');
    timer = setInterval(function(){
      time -= 1;

      minutes = Math.floor(time / 60);
      seconds = time % 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);
      
      if(time === 0) {
        clearInterval(timer)
        // change player & reset the board;
        if(player === 1) {
          time = 5;
          player = 2;
          // reset the board
          $("#new-country-input").addClass('hidden');
          $('button').show();
        } else {
          // end the game
          // find winner

          if(player1 > player2) {
            $(".winner").text("Player 1 wins!")
          } else {
            $(".winner").text("Player 2 wins!")
          }
        }
      }
    }, 1000)
  }


//Button click starts the timer and makes the button disapear
  $('button').on("click", function() {
    startClock();
    $(this).hide();
    $("hidden").hide();
    setTimeout(function() {
      $('button').show();
    }, 180000); 
  });  
  

});











