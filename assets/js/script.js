
function loadTagManager(){
  var html = "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P8XWV7K');</script>";
  jQuery('head').append(html);

  var html2 = '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P8XWV7K" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
  jQuery('body').append(html2);

}

jQuery(document).ready(function ($) {

    'use strict';

    // starting up tagmanager
    window.dataLayer = window.dataLayer || [];
    setTimeout("loadTagManager()", 500);

    // a little workaround for single blog posts and archive pages 
    // that are not automatically shown in active navigation
    jQuery('body.blog.paged #topnavigation li:nth-child(2), body.single #topnavigation li:nth-child(2), body.archive #topnavigation li:nth-child(2)').addClass('active');

    // back to top link
    var offset = 220;
    var duration = 500;
    jQuery('body').append('<a href="#" id="back-to-top">Zur&uuml;ck nach oben</a>');
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#back-to-top').fadeIn(duration);
        } else {
            jQuery('#back-to-top').fadeOut(duration);
        }
    });
    jQuery('#back-to-top').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 1000, 'swing');
        return false;
    });

    // @todo check if we use this and disable
    $('[data-toggle="tooltip"]').tooltip();

    // @todo check if we use this and disable
    jQuery('.is-datediff').each(function(item, index){
      var $this = $(this);
      var $date1 = moment($this.data('from'));
      var $date2 = moment(new Date());
      $this.text($date2.diff($date1, 'days')+1);
    });

    // @todo check if we use this and disable
    jQuery('.is-datediff-month').each(function(item, index){
      var $this = $(this);
      var $date1 = moment($this.data('from'));
      var $date2 = moment(new Date());
      $this.text(parseInt($date2.diff($date1, 'months')));
    });

});

// make navbar static on scroll
var bottom = false;
jQuery(window).scroll(function () {
    'use strict';
    var menu = jQuery('#topnavigation');
    var offset = menu.offset();
    if (bottom === false) {
        bottom = offset.top - menu.height();
    }
    if (jQuery(window).scrollTop() > bottom) {
        menu.addClass('navbar-fixed-top');
    } else {
        menu.removeClass('navbar-fixed-top');
    }
});
