$(document).ready(function(){
    $('.about-img-thousand').slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 1000,    
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-circle-outline"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-circle-outline"></ion-icon></button>`,
       dots: true, // 1 2 3 4 
       responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            
            
          }
        }
      ]
    });
  });   


 