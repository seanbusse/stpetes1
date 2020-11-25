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
    $(this.parentNode).children('.mobileView').children('.mobileClose').show();
    $(this.parentNode).children('.mobileView').children('.mobileOpen').hide();
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
    $(this.parentNode).children('.mobileView').children('.mobileClose').toggle();
    $(this.parentNode).children('.mobileView').children('.mobileOpen').toggle();
  }
});

// Add a open/close button/indicator for dropdown menu
var screenSize = $(window).width();
if (screenSize < 992) {
  $('.mobileView').click(function() {
    $(this).children('.mobileOpen').toggle();
    $(this).children('.mobileClose').toggle();
    $(this.parentNode).children('.dropdown-menu').slideToggle();
  });

  // $('.mobileClose').click(function() {
  //   $(this.parentNode).children('.dropdown-menu').slideUp();
  //   $(this).toggle();
  //   $(this.parentNode).children('.mobileOpen').show();
  //   $('.mobileClose').mouseout(function() {
  //     $('.dropdown').click(function() {
  //       $(this).children('.dropdown-menu').slideDown();
  //     });
  //   });
  // });
}

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
    $('.homeLink').attr('href', '/');
    $('.mobileView').hide();
  } else {
    $('.dropdown').off('mouseover');
    $('.dropdown').off('mouseout');
  }
  console.log(menuDisplay + ' ' + size + 'px');
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
