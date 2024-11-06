$(document).ready(function () {
  // Smooth scroll for navbar links
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top - 50,
      },
      800
    );
  });

  // Animate jumbotron text on load
  $('.jumbotron h1, .jumbotron p').hide().fadeIn(2000);

  // Highlight active section in navbar on scroll
  $(window).on('scroll', function () {
    const scrollPosition = $(this).scrollTop();
    $('section').each(function () {
      const sectionOffset = $(this).offset().top - 60;
      if (scrollPosition >= sectionOffset) {
        const sectionID = $(this).attr('id');
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav li a[href="#' + sectionID + '"]')
          .parent()
          .addClass('active');
      }
    });
  });
});
