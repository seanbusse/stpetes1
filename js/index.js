// Hide the plain-text email addresses
var string1 = "info";
var string2 = "@";
var string3 = "stpetesok.church";
var string4 = string1 + string2 + string3;
$('.emailAddress').html("<a href=mailto:" + string1 + string2 + string3 + ">" + " " + string4 + "</a>");

// Set mobile Home behavior
$('.homeLink').click(function() {
  var menuSize = $(window).width();
  var dropdownDisplay = $('.homeDropdown').css('display');
  if (dropdownDisplay == 'none' && menuSize < 992) {
    $('.homeLink').attr('href', '#');
  } else {
    $('.homeLink').attr('href', 'index');
  }
});
// Change default menu behavior on load or resize
function setMenuBehavior() {
  var size = $(window).width();
  var menuDisplay = $('.homeDropdown').css('display');

  // Set toggle behavior
  if (size > 992) {
    $('.dropdown').mouseover(function() {
      $(this).children('.dropdown-menu').show();
    });
    $('.dropdown').mouseout(function() {
      $(this).children('.dropdown-menu').hide();
    });
    $('.homeLink').attr('href', 'index');
  } else {
    $('.dropdown').off('mouseover');
    $('.dropdown').off('mouseout');
    $('.dropdown').click(function() {
      $(this).children('.dropdown-menu').show();
    });
  }
  console.log(menuDisplay  + ' ' + size + 'px');
}


$(document).ready(function() {
  var startingSize = $(window).width();
  setMenuBehavior();
});

// Show window size on resize
$(window).resize(function() {
  var newSize = $(window).width();
  $('.windowWidthChange').html('<code style="padding: 3px 10px; color: #333333;">' + newSize + 'px' + '</code>');
  setMenuBehavior();
});
