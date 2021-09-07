
export default function slickInit(){
  $(document).ready(function(){
    $('.projetos').slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  });
}
