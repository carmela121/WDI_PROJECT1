

// var $countriesList = window.countries;

// document.getElementById('#new-country-form').onkeydown = function(e){
//    if(e.keyCode == 13){
  
//    }
// };

// document.onkeydown=function(){
//     if(window.event.keyCode=='13'){
//         submitForm();
//     }
// }

// function submitForm(){
//     document.new-country-form.submit();
//     document.new-country-form.method='post';
// }
// document.onkeydown=function(){
//     if(window.event.keyCode=='13'){
//         return submitForm();
//     }
// }

$(document).ready(function() {

  var time = 60 * 3;
  var timer;
  var $answers = $('#printAnswers');
  var player1 = 0;
  var player2 = 0;
  var player = 1;

  //searches for a match on the country list
  function matchCountry(text) {
    console.log(countries.indexOf(text.toLowerCase()))
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

// if (player1 < player2){
//   return ("Player 1 wins!");
// } else if (player1 > player2){
//   return ("Player 2 wins!");
// } else {
//   return ("It's a tie");
// }



  

  
 $('#new-country-form').on("submit", function(event) {
    event.preventDefault();
    var text = $("#new-country-input").val();
    console.log(text);
    $("#new-country-input").val("");
    matchCountry(text);
  });
//Correct answer prints on the screen
  // function printCorrectAnswer(text){
  //   if (matchCountry === countries){
  //   $('#printAnswers').text(countries);
  //   }

  // }
  //After time is up, it is player's 2 turn

  

  //timer
  // function startTimer(duration, display) {
  //   var start = Date.now(),
  //       diff,
  //       minutes,
  //       seconds;

  //   function timer() {
  //       // get the number of seconds that have elapsed since 
  //       // startTimer() was called
  //       diff = duration - (((Date.now() - start) / 1000) | 0);

  //       // does the same job as parseInt truncates the float
  //       minutes = (diff / 60) | 0;
  //       seconds = (diff % 60) | 0;

  //       minutes = minutes < 10 ? "0" + minutes : minutes;
  //       seconds = seconds < 10 ? "0" + seconds : seconds;

  //       display.text(minutes + ":" + seconds); 

  //       if (diff <= 0) {
  //         // add one second so that the count down starts at  full duration
  //         // example 05:00 not 04:59
  //         start = Date.now() + 1000;
  //       }
  //   };
  //   // we don't want to wait a full second before the timer starts
  //   timer();
  //   setInterval(timer, 1000);
  // }

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











