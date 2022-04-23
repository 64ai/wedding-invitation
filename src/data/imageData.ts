import type {ImageType} from '../types/global';

export const imageData: ImageType[] = [
  {
    src: '/images/1_.jpg',
    alt: 'wedding 사진',
    x: -220,
    y: 10,
  },
  {
    src: '/images/2_.jpg',
    alt: 'wedding 사진',
    x: -205,
    y: 10,
  },
  {
    src: '/images/3_.jpg',
    alt: 'wedding 사진',
    x: -153,
    y: 10,
  },
  {
    src: '/images/4_.jpg',
    alt: 'wedding 사진',
    scale: 1.5,
    x: 0,
    y: 10,
  },
  {
    src: '/images/5_.jpg',
    alt: 'wedding 사진',
    x: 0,
    y: 10,
  },
  {
    src: '/images/6_.jpg',
    alt: 'wedding 사진',
    x: -183,
    y: 10,
  },
  {
    src: '/images/7_.jpg',
    alt: 'wedding 사진',
    x: 0,
    y: 10,
  },
  {
    src: '/images/8_.jpg',
    alt: 'wedding 사진',
    x: 0,
    y: 10,
  },
  {
    src: '/images/9_.jpg',
    alt: 'wedding 사진',
    x: 0,
    y: 10,
  }
].map((image, index) => ({...image, index}));
