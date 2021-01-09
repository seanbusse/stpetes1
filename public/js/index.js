// Hide the plain-text email addresses
var string1 = "info";
var string2 = "@";
var string3 = "stpetesok.church";
var string4 = string1 + string2 + string3;
$('.emailAddress').html("<a href=mailto:" + string1 + string2 + string3 + ">" + " " + string4 + "</a>");

// Set mobile Home behavior
$('.hasLink').click(function() {
  var menuSize = $(window).width();
  var dropdownDisplay = $(this.parentNode).children('.dropdown-menu').css('display');
  var link = $(this).attr('value');
  if (dropdownDisplay == 'none' && menuSize < 992) {
    $(this.parentNode).children('.dropdown-menu').slideToggle();
    $(this.parentNode).children('.mobileIndicator').children('.mobileClose').show();
    $(this.parentNode).children('.mobileIndicator').children('.mobileOpen').hide();
    $('.hasLink').attr('href', '#');
  } else {
    $('.hasLink').attr('href', link);
  }
});

// Set new dropdown-toggle behavior
$('.noLink').click(function() {
  var menuSize = $(window).width();
  if (menuSize < 992) {
    $(this.parentNode).children('.dropdown-menu').slideToggle();
    $(this.parentNode).children('.mobileIndicator').children('.mobileClose').toggle();
    $(this.parentNode).children('.mobileIndicator').children('.mobileOpen').toggle();
  }
});

// Add a open/close button/indicator for dropdown menu
var screenSize = $(window).width();
if (screenSize < 992) {
  $('.mobileIndicator').click(function() {
    $(this).children('.mobileOpen').toggle();
    $(this).children('.mobileClose').toggle();
    $(this.parentNode).children('.dropdown-menu').slideToggle();
  });
}

// Set or change menu behavior
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
    $('.homeLink').attr('href', '/');
    $('.mobileIndicator').hide();
  } else {
    $('.dropdown').off('mouseover');
    $('.dropdown').off('mouseout');
    $('.mobileIndicator').show();
  }
}

// Set Menu Behavior on Page Load
$(document).ready(function() {
  setMenuBehavior();
});

// Set Menu Behavior on resize
$(window).resize(function() {
  setMenuBehavior();
});
