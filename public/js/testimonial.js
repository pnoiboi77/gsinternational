(function($){

  var testimonials = [
    'He never missed an appointment - Mary Swanson',
    'My favorite realtor in the world - Jack Roman',
    'What a seamless process from start to finish - Rick Martin'
  ];


  var index = 0;

  $('#testimonials')
      .addClass('animated rollIn')
      .text(testimonials[index]);

  window.setInterval(function() {
    $('#testimonials')
      .removeClass('rollIn')
      .addClass('rollOut');

      if (index >= testimonials.length - 1) {
        index = 0;
      } else {
        index += 1;
      }

      window.setTimeout(function() {
        $('#testimonials')
            .removeClass('rollOut')
            .addClass('rollIn')
            .text(testimonials[index]);
        console.log('timeout');
      }, 1000);
      console.log('interval');
  },5000);
})(jQuery);
