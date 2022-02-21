import {Divider} from '../../components';

import type {FC} from 'react';

export type IntroProps = {
  value?: any;
}

const Intro: FC<IntroProps> = (props) => {
  const {value} = props;

  return (
    <div>
      어서오세요.
      <Divider />
    </div>
  );
};

export default Intro;
