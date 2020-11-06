$(document).ready(function() {
  console.log('The index.js file is loaded properly');
});


$('.dropdown').mouseover(function() {
  $(this).children('.dropdown-menu').show();
});
$('.dropdown').mouseout(function() {
  $(this).children('.dropdown-menu').delay(1000).hide();
});
$('.dropdown-menu').mouseover(function() {
  $(this).show();
});
$('.dropdown-menu').mouseout(function() {
  $(this).hide();
});
