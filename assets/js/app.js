$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function (e) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  e.stopPropagation();
});

$('input[type="text"]').keypress(function (e) {
  if (e.which === 13) {
    const todoText = $(this).val();

    $(this).val('');
    $('ul').append(`<li>${todoText} <span>X</span></li>`);
  }
});