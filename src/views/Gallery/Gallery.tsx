import {Divider} from '../../components';

import type {FC} from 'react';

export type GalleryProps = {
  value?: any;
}

const Gallery: FC<GalleryProps> = (props) => {
  const {value} = props;

  return (
    <div>
      갤러리
      <Divider />
    </div>
  );
};

export default Gallery;
