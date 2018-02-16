(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 800, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  $('.portfolio-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.portfolio-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

  // Ao clicar em uma disciplina, evita que ela fique fora da tela.
  $('a.aulas-disciplina').on('click', function (event) {
    event.preventDefault();
    var alvo = $(this).data('alvo') !== undefined ? $(this).data('alvo') : $(this).attr('href');
    console.log('alvo: '+$(this).data('alvo')+' href: '+$(this).attr('href'));
    if ($(alvo).html() === "") {
      var quantidadeDeAulas = $(this).data('quantidade'),
        disciplina = $(this).data('disciplina'),
        conteudoHTML = "<h4 class=\"mt-3 w-100\" >Aulas</h4>";
      for (var i = 1; i <= quantidadeDeAulas; i++) {
        var aula = (i < 10 ? "00" + i.toString() : (i < 100 ? "0" + i.toString() : i.toString()));
        conteudoHTML += "<a href=\"http://videoaula.rnp.br/v.php?f=/cederj/sistemas_comp/";
        conteudoHTML += disciplina;
        conteudoHTML += "/Aula_";
        conteudoHTML += aula;
        conteudoHTML += "/Aula_";
        conteudoHTML += aula;
        conteudoHTML += ".xml\" class=\"btn cor-composto-laranja fundo-principal m-1\" target=\"_blank\">";
        conteudoHTML += aula.slice(1);
        conteudoHTML += "</a>";
      }
      $(alvo).html(conteudoHTML);
    }
    setTimeout(function () {
      $('html, body').animate({
        scrollTop: $(alvo).parent().offset().top - $('#mainNav').outerHeight()
      }, 800, function () {})
    }, 0);
  });

})(jQuery); // End of use strict
