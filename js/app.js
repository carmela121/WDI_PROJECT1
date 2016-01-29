

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

  function matchCountry(text) {
    if (countries.indexOf(text) !== -1){
    console.log("it's a match!");
    }
  }
  
  // $('#new-country-form').on("click", function() {
    // var key = e.which;
    // if (key == 13) {
// As ASCII code for ENTER key is "13"
  $('#new-country-form').on("submit", function(event) {
    event.preventDefault();
    var text = $("#new-country-input").val();
    console.log(text);
    $("#new-country-input").val("");
    matchCountry(text);
  }); // Submit form code
  // });
});

// var countryMatch = window.countries;
// countries.indexOf(countryMatch);



