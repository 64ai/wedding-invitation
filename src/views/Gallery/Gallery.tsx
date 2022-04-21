import {Title} from '../../components';
import Carousel from './Carousel';

import type {FC} from 'react';

export type GalleryProps = {};

const Gallery: FC<GalleryProps> = () => {
  return (
    <article style={{position: 'relative'}}>
      <Title text="Ta-da!" style={{fontSize: 56, color: '#2C2C2C', marginBottom: 20}} />
      <Carousel />
    </article>
  );
};

export default Gallery;

