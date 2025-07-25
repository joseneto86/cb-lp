$(document).ready(function() {
  $('.accordion .collapse').on('shown.bs.collapse', function () {
    $(this).prev('.card-header').addClass('ativo');
    $(this).prev().find('img').attr('src', 'img/arrow-up.png');
  });

  $('.accordion .collapse').on('hidden.bs.collapse', function () {
    $(this).prev('.card-header').removeClass('ativo');
    $(this).prev().find('img').attr('src', 'img/arrow-down.png');
  });



  $(".action-click").on('click', function() {
   window.location.href = "https://www.chababy.com.br/register";
  });

  $(".site-seguro").on('click', function() {
    window.open("https://www.sslshopper.com/ssl-checker.html?#hostname=https://www.chababy.com.br");
   });

   $(".reclameaqui").on('click', function() {
    window.open("https://www.reclameaqui.com.br/empresa/chababy/");
   });
 

});
