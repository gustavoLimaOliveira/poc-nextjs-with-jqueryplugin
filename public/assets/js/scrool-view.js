(function ($, document, window) {
  $(document).ready(function () {
    screenCheck();

    $('.scroll-control .one').click(function () {
      $.scrollify.move('#s-one');
    });
    $('.scroll-control .two').click(function () {
      $.scrollify.move('#s-two');
    });
    $('.scroll-control .three').click(function () {
      $.scrollify.move('#s-three');
    });
  });

  $(window).on('resize', function () {
    screenCheck();
  });

  function applyScroll() {
    $.scrollify({
      section: '.scroll',
      sectionName: 'section-name',
      //standardScrollElements: 'section',
      easing: 'easeOutExpo',
      scrollSpeed: 1100,
      offset: 0,
      scrollbars: true,
      setHeights: true,
      overflowScroll: true,
      updateHash: false,
      touchScroll: true,
    });
  }

  function screenCheck() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID || $(window).width() <= 1024) {
      // its mobile screen
      $.scrollify.destroy();
      $('section').removeClass('scroll').removeAttr('style');
      $.scrollify.disable();
    } else {
      // its desktop
      $('section').addClass('scroll');
      applyScroll();
      $.scrollify.enable();
    }
  }
})($, document, window);


