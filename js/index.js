// Test that index.js is properly loaded
$(document).ready(function() {
  console.log('Your viewport width is ' + $(window).width() + 'px');
});

// Hide the plain-text email addresses
var string1 = "info";
var string2 = "@";
var string3 = "stpetesok.church";
var string4 = string1 + string2 + string3;

$(document).ready(function() {
  $('.emailAddress').html("<a href=mailto:" + string1 + string2 + string3 + ">" + " " + string4 + "</a>");
});
