$(document).ready(function() {
//counters = 0
var redCount = 0;
var yellowCount = 0;
var greenCount = 0;
var blueCount = 0;

//event listener
$('.color-button').on('click', function() {
  if ($(this).data('color') === 'red') {
    $('.container').append('<div class="red color-cube"></div>');
    redCount++;
    $('#red').text('Total red: ' + redCount);

  }else if ($(this).data('color') === 'yellow'){
    $('.container').append('<div class="yellow color-cube"></div>');
    yellowCount++;
    $('#yellow').text('Total yellow: ' + yellowCount);

  }else if ($(this).data('color') === 'green'){
    $('.container').append('<div class="green color-cube"></div>');
    greenCount++;
    $('#green').text('Total green: ' + greenCount);

  }else{
    $('.container').append('<div class="blue color-cube"></div>');
    blueCount++;
    $('#blue').text('Total blue: ' + blueCount);
  }

  })
})







//end of ready function

//function to add <div> class="color-cube"
