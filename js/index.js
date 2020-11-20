setMenuBehavior();

// Hide the plain-text email addresses
var string1 = "info";
var string2 = "@";
var string3 = "stpetesok.church";
var string4 = string1 + string2 + string3;

$(document).ready(function() {
  $('.emailAddress').html("<a href=mailto:" + string1 + string2 + string3 + ">" + " " + string4 + "</a>");
});

// Show window size on resize
$(window).resize(function() {
  var windowSize = $(window).width();
  $('.windowWidthChange').html('<code style="padding: 3px 10px; color: #333333;">' + windowSize + 'px' + '</code>');
  setTimeout(function() {
    $('.windowWidthChange').css('display','none');
  }, 1000);
  setMenuBehavior();
});

// Change default menu behavior on load
function setMenuBehavior() {
  // Get the window windowSize
  var windowSize = $(window).width();
  // Set Behavior
  if(windowSize >= 992) {
    $('.dropdown').mouseover(function() {
      $(this).children('.dropdown-menu').show();
    });
    $('.dropdown').mouseout(function() {
      $(this).children('.dropdown-menu').hide();
    });
    $('.dropdown-menu').mouseover(function() {
      $('.dropdown-manu').show();
    });
    $('.dropdown-menu').mouseout(function() {
      $('.dropdown-manu').hide();
    });
  } else if(windowSize <= 991) {
    $('.dropdown').off('mouseover');
    $('.dropdown').off('mouseout');
  }
}
