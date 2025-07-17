$(document).ready(function() {
  $('.accordion .collapse').on('shown.bs.collapse', function () {
    $(this).prev('.card-header').addClass('ativo');
    $(this).prev().find('img').attr('src', 'img/arrow-up.png');
  });

  $('.accordion .collapse').on('hidden.bs.collapse', function () {
    $(this).prev('.card-header').removeClass('ativo');
    $(this).prev().find('img').attr('src', 'img/arrow-down.png');
  });



});
