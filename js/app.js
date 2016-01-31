

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


  var $answers = $('#printAnswers');

  // $(document).on("keyup", function(e) {
  //   if(e.keyCode === 13) {
  //     var text = $("#new-country-input").val();
  //     console.log(text);
  //     matchCountry(text);
  //     $("#new-country-input").val("");
  //   }
  // });

  //searches for a match on the country list
  function matchCountry(text) {
    console.log(countries.indexOf(text.toLowerCase()))
    if (countries.indexOf(text.toLowerCase()) !== -1){
      console.log("it's a match!");
      $('#printAnswers').append('<li>' + text + '</li>');
    } else {
      console.log("Sorry, please try again");
    }
  }

  //Change turn
  
  

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
  function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;

    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds); 

        if (diff <= 0) {
          // add one second so that the count down starts at  full duration
          // example 05:00 not 04:59
          start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
  }

  function startClock() {
    var threeMinutes = 60 * 3,
        display = $('#screen');

    // show text box...
    $('#new-country-input').removeClass('hidden');
    startTimer(threeMinutes, display);
  }

  $('button').on("click", function() {
  startClock();
  });

});







// var countryMatch = window.countries;
// countries.indexOf(countryMatch);



