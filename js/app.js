$(document).ready(function() {

  var time = 60*3;
  var timer;
  var player1 = 0;
  var player2 = 0;
  var player = 1;
  var audio = $('audio')[0];

  //searches for a match on the country list and adds a pin to the right country. It also allows upper and lower case.
  function matchCountry(text) {
    var pinClass = "." + text.toLowerCase().replace(/ /g, "-");
    var $pin = $('.pin' + pinClass);
    if (countries.indexOf(text.toLowerCase()) !== -1 && $pin.hasClass('hidden')){
      $pin.removeClass('hidden');
  // plays win sound
      audio.play();
  // switches players
      if(player === 1) {
        player1++;
      } else {
        player2++;
      }
     
      } else {
      console.log("Sorry, please try again");
    }
    // display scores

    $('.score1').text("Player 1 - "+ player1);
    $('.score2').text("Player 2 - "+ player2);
  }


 $('#new-country-form').on("submit", function(event) {
    event.preventDefault();
    var text = $("#new-country-input").val();
    $("#new-country-input").val("");
    matchCountry(text); 
  });
 
 
// starts timer

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
          time = 3*60;
          player = 2;
          // reset the board and shows the welcome screen and button again
          $("#new-country-input").addClass('hidden');
          $('.welcome-screen').removeClass('hidden');
          $('h3').text("Player 2 get ready");
          console.log($('.enter'));
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
    $('.welcome-screen').addClass('hidden');
    startClock();
    setTimeout(function() {
      $(".pin").removeClass("hidden").addClass("hidden");
    }, 180000); 
  });  
  
});