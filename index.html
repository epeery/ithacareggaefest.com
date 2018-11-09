---
title: Home
layout: default
---

<main>

  {% include splash.liquid %}

  {% assign sorted_sections = site.sections | sort:"position" %}
  {% for section in sorted_sections %}
    {% if section.info.hidden != true %}
      {% include {{ section.info.file }} %}
    {% endif %}
  {% endfor %}

  <section class="sponsors">
    <h1>Sponsors</h1>

    <h2>Music Sponsors</h2>
    <a href="http://thehaunt.com/" target="_blank" rel="noreferrer noopener" class="sponsor the-haunt"></a>

    <h2>Festival Sponsors</h2>
    <div class="sponsor-grid">
      <a href="https://www.marriott.com/hotels/travel/ithmc-ithaca-marriott-downtown-on-the-commons/" target="_blank" rel="noreferrer noopener" class="sponsor marriott "></a>
      <a href="https://www.elmirasavingsbank.com/Default.aspx" target="_blank" rel="noreferrer noopener" class="sponsor esb"></a>
      <a href="https://www.ithacabeer.com/" target="_blank" rel="noreferrer noopener" class="sponsor ithaca-beer"></a>
      <a href="http://www.greenscenelg.com/" target="_blank" rel="noreferrer noopener" class="sponsor green-scene"></a>
      <a href="https://cspmanagement.com/" target="_blank" rel="noreferrer noopener" class="sponsor csp"></a>
      <a href="http://www.mightyyoga.com/" target="_blank" rel="noreferrer noopener" class="sponsor mighty-yoga"></a>
      <a href="https://renovussolar.com/" target="_blank" rel="noreferrer noopener" class="sponsor renovus"></a>
      <a href="https://www.limebike.com/" target="_blank" rel="noreferrer noopener" class="sponsor limebike"></a>
      <a href="https://www.flsm.edu/" target="_blank" rel="noreferrer noopener" class="sponsor flsm"></a>
      <a href="http://www.lunastreetfood.com/" target="_blank" rel="noreferrer noopener" class="sponsor luna-street-food"></a>
      <a href="https://www.grassrootsfest.org/" target="_blank" rel="noreferrer noopener" class="sponsor grassroots"></a>
      <a href="https://www.childdevelopmentcouncil.org/" target="_blank" rel="noreferrer noopener" class="sponsor child-development-council"></a>
      <a href="http://www.casitapolaris.com/" target="_blank" rel="noreferrer noopener" class="sponsor casita-del-paloris"></a>
      <a href="https://greenstar.coop/" target="_blank" rel="noreferrer noopener" class="sponsor greenstar"></a>
      <a href="http://www.vivataqueria.com/" target="_blank" rel="noreferrer noopener" class="sponsor viva"></a>
      <a href="http://guayaki.com/" target="_blank" rel="noreferrer noopener" class="sponsor guayaki"></a>

    </div>

  </section>

  <section class="tickets-section">
    <div class="tickets">
      <h1>Tickets</h1>
      <p class="table-header">Day Pass*  (park only)</p>
      <table>
       <tr>
         <td>$15 Early Bird</td>
         <td>March 1 - April 1</td>
       </tr>
       <tr>
         <td>$25 Pre Sale</td>
         <td>Ends June 21</td>
       </tr>
       <tr>
         <td>$35 Gate</td>
         <td></td>
       </tr>

      </table>
      <p><br>*Youth under 16 are FREE with an adult</p>

      <br>
      <br>
      <br>

      <p class="table-header">Weekend Pass (all venues)</p>

      <table>
       <tr>
         <td>$30 Early Bird</td>
         <td>March 1 - April 1</td>
       </tr>
       <tr>
         <td>$50 Pre Sale</td>
         <td>Ends June 21</td>
       </tr>
      </table>
      <a class="get-tickets" rel="noopener noreferrer" target="_blank "href="https://www.ticketfly.com/purchase/event/1656918">Get Tickets</a>
    </div>
  </section>

  <section class="social">
    <div class="social-content">
      <h2>Join the conversation</h2>
      <div class="social-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/IthacaReggaeFest"><div class="social-facebook"></div></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ithacareggaefest"><div class="social-instagram"></div></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/iTownReggaeFest"><div class="social-twitter"></div></a>
      </div>
    </div>

  </section>

</main>

{% include footer.liquid %}

<script src="/assets/scripts/jquery-3.1.0.js" type="text/javascript"></script>
<script src="/assets/scripts/siema.min.js" type="text/javascript"></script>

<script type="text/javascript">

  $('.nav-logo-img').ready(() => {
    $('main').css('visibility', 'visible');
    $('main').css('display', 'block');

    $('document').ready(() => {

        const slider = new Siema({
          selector: '.slider',
          easing: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
          duration: 500,
          loop: true,
          threshold: 60,
          onInit: () => {
            autoplaySlider(true);
          },
          onChange: () => {
            clearTimeout(timer);
            autoplaySlider(false);
          },
        });

        var timer;
        var galleryTimer;

        $('#ticketBtn').click(() => {
            $('html, body').animate({
                scrollTop: $(".tickets-section").offset().top-$('.nav').height()
            }, 1000);
        });

        $('.nav-item').click(e => {

            $('.nav-toggle').prop('checked', false);

            var elem = e.target;
            console.log($(elem).attr('data-target'));
            $('html, body').animate({
                scrollTop: $($(elem).attr('data-target')).offset().top-$('.nav').height()
            }, 1000);
        });

        populateGallery();


        function autoplaySlider(isFirstSlide) {
          if(isFirstSlide) {
            timer = setTimeout(() => {
              slider.next(1);
            }, 8000);
          } else {
            timer = setTimeout(() => {
              slider.next(1);
            }, 5000);
          }

        }



        function populateGallery() {
          function autoplayGallery() {
            galleryTimer = setTimeout(() => {
              gallery.next(1);
            }, 4000);
          }

          var numberOfimages = 27;
          var images = [];
          var imagePath = '/assets/images/image_gallery/'
          var imageType = '.jpg';

          for (var i = 1; i <= numberOfimages; i++) {
            images.push(i);
          }

          images = shuffle(images);

          for (var i = 0; i < images.length; i++) {
            $('.gallery').append('<div class="galleryImage"><img src='+ imagePath + images[i] + imageType + '></div>');
          }

          const gallery = new Siema({
            selector: '.gallery',
            easing: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
            duration: 500,
            loop: true,
            threshold: 60,
            onInit: () => {
              autoplayGallery();
            },
            onChange: () => {
              clearTimeout(galleryTimer);
              autoplayGallery();
            },
          });
        }

        function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
        }

    });

  });
</script>
