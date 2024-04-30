import type {ImageType} from '../types/global';

export const imageData: ImageType[] = [
  {
    src: 'images/1_-min.jpg',
    alt: 'wedding 사진',
    x: -220,
    y: 10,
  },
  {
    src: 'images/2_-min.jpg',
    alt: 'wedding 사진',
    x: -205,
    y: 10,
  },
  {
    src: 'images/6_-min.jpg',
    alt: 'wedding 사진',
    x: -183,
    y: 10,
  },
  {
    src: 'images/5_-need-resize-min.jpg',
    alt: 'wedding 사진',
    x: 0,
    y: 10,
    scale: 1.7,
    translateX: 60,
    translateY: 152,
  },
  {
    src: 'images/3_-min.jpg',
    alt: 'wedding 사진',
    x: -153,
    y: 10,
  },
  {
    src: 'images/4_-min.jpg',
    alt: 'wedding 사진',
    scale: 1.5,
    x: 0,
    y: 10,
  },
  {
    src: 'images/7_-min.jpg',
    alt: 'wedding 사진',
    x: 0,
    y: 10,
    scale: 1.2,
  },
  {
    src: 'images/IMG_7675-min.JPG',
    alt: 'wedding 사진',
    x: 0,
    y: 10,
  },
  {
    src: 'images/IMG_7692-min.JPG',
    alt: 'wedding 사진',
    x: 0,
    y: 10,
  },
  {
    src: 'images/IMG_7705-min.JPG',
    alt: 'wedding 사진',
    x: -152,
    y: 10,
  },
  {
    src: 'images/9_-min.jpg',
    alt: 'wedding 사진',
    x: 0,
    y: 10,
  }
].map((image, index) => ({...image, index}));
