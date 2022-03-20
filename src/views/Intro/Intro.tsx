import {Divider, Title} from '../../components';

import type {FC} from 'react';

export type IntroProps = {
  value?: any;
};

const Intro: FC<IntroProps> = (props) => {
  const {value} = props;

  return (
    <div>
      <img
        src="/wedding-invitation/images/thumbnail.jpeg"
        alt="dd"
        width={100}
      />
      <Title text="어서오세요." />
      <Divider />
    </div>
  );
};

export default Intro;
