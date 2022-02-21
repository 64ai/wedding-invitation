import {useEffect} from 'react';

import type {FC} from 'react';
import {Divider} from '../../components';

export type MapProps = {
  value?: any;
}

const Map: FC<MapProps> = (props) => {
  return (
    <div>
      찾아오시는 길
      <Divider />
    </div>
  );
};

export default Map;
