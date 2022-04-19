export interface ImageType {
  src: string;
  alt: string;
  x: number;
  y: number;
};

export const imageData: ImageType[] = [
  {
    src: '/wedding-invitation/images/thumbnail.jpeg',
    alt: 'wedding 사진', // TODO: alt 추가,
    x: -120,
    y: 10,
  },
  {
    src: '/wedding-invitation/images/1.jpeg',
    alt: 'wedding 사진', // TODO: alt 추가,
    x: -180,
    y: 0,
  },
  {
    src: '/wedding-invitation/images/2.jpeg',
    alt: 'wedding 사진', // TODO: alt 추가
    x: -125,
    y: 50,
  },
  {
    src: '/wedding-invitation/images/3.jpeg',
    alt: 'wedding 사진', // TODO: alt 추가
    x: -170,
    y: 10,
  }
];
