
export default function slickInit(){
  $(document).ready(function(){
    $('.projetos').slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }]
    });
  });
}
