(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.slider').slider({height: 180, full_width: true});

    var options = [
    {selector: '#fade1', offset: 150, callback: 'Materialize.fadeInImage("#fade1")'}
    // {selector: '#fade2', offset: 150, callback: 'Materialize.fadeInImage("#fade2")'},
    // {selector: '#fade3', offset: 150, callback: 'Materialize.fadeInImage("#fade3")'},
    // {selector: '#fade4', offset: 150, callback: 'Materialize.fadeInImage("#fade4")'}
    ];
    Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space