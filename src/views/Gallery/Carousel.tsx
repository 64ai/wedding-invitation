import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    {
      src: '/wedding-invitation/images/thumbnail.jpeg',
      alt: 'wedding 사진', // TODO: alt 추가
    },
    {
      src: '/wedding-invitation/images/1.jpeg',
      alt: 'wedding 사진', // TODO: alt 추가
    },
    {
      src: '/wedding-invitation/images/2.jpeg',
      alt: 'wedding 사진', // TODO: alt 추가
    },
    {
      src: '/wedding-invitation/images/3.jpeg',
      alt: 'wedding 사진', // TODO: alt 추가
    }
  ];

  return (
    <Slider {...settings}>
      {images.map(({src, alt}) => (
        <div key={src}>
          <img
            src={src}
            alt={alt}
            width="100%"
            height="100%"
          />
        </div>
      ))}
    </Slider>
  );
}
