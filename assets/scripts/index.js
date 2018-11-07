$(document).ready(() => {

  let locked = false;

  let slide = 0;
  let nextSlide = 1;

  $('.header-bg img:nth-child(1)').attr('position', '0');
  $('.header-info .header-info-section:nth-child(1)').attr('position', '0');

  $('.header-next-imgs img:nth-child(1)').attr('position', '0');


  $('.header-next-btn').click(() => {

    if (!locked) {

     locked = true;
     setTimeout(unlock, 1000);

     slide = slide + 1;
     nextSlide = slide + 1;

     if ($('.header-bg').children().length > 1) {
       if (slide != $('.header-bg').children().length) {
         $('.header-bg img:nth-child('+ slide +')').attr('position', '-1');
         $('.header-bg img:nth-child('+ nextSlide +')').attr('position', '0');

         $('.header-info .header-info-section:nth-child('+ slide +')').attr('position', '-1');
         $('.header-info .header-info-section:nth-child('+ nextSlide +')').attr('position', '0');

         $('.header-next-imgs img:nth-child('+ slide +')').attr('position', '-1');
         $('.header-next-imgs img:nth-child('+ nextSlide +')').attr('position', '0');

       }

       else {
         $('.header-bg').children().attr('position', '1');
         $('.header-bg img:nth-child(1)').attr('position', '0');

         $('.header-info').children().attr('position', '1');
         $('.header-info .header-info-section:nth-child(1)').attr('position', '0');

         $('.header-next-imgs').children().attr('position', '1');
         $('.header-next-imgs img:nth-child(1)').attr('position', '0');

         slide = 0;
       }
     }
   }
 });

  function unlock () {
    locked = false;
  }

});
