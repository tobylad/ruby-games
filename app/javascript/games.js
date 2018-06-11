$(document).ready(function() {
  $('h1').on('click', test);
})

const test = function() {
  $(this).css('color', 'red');
};
