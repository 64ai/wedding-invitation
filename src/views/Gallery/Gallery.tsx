import {Title} from '../../components';
import Carousel from './Carousel';

import type {FC} from 'react';

export type GalleryProps = {
  value?: any;
};

const Gallery: FC<GalleryProps> = (props) => {
  const {value} = props;

  return (
    <article style={{position: 'relative'}}>
      <Title text="Ta-da!" style={{fontSize: 56, color: '#2C2C2C', marginBottom: 20}} />
      <Carousel />
    </article>
  );
};

export default Gallery;

