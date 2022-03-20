import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    {
      path: '/wedding-invitation/images/thumbnail.jpeg'
    },
    {
      path: '/wedding-invitation/images/1.jpeg'
    },
    {
      path: '/wedding-invitation/images/2.jpeg'
    },
    {
      path: '/wedding-invitation/images/3.jpeg'
    }
  ];

  return (
    <Slider {...settings}>
      {images.map(({path}) => (
        <div key={path}>
          <img
            src={path}
            width="100%"
            height="100%"
          />
        </div>
      ))}
    </Slider>
  );
}
