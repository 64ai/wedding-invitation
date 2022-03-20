import {Divider, Paragraph, Title} from '../../components';

import type {FC} from 'react';

export type IntroProps = {
  value?: any;
};

const Intro: FC<IntroProps> = (props) => {
  const {value} = props;

  const text = '안녕하세요\n저희는 승남이와 정혜예요.\n 저희가 결혼하게 되었는데요, \n많이 와주세요\n그럼 안넝~';
  return (
    <div>
      <Title text="어서오세요." />
      <Paragraph text={text} />
      <Divider />
    </div>
  );
};

export default Intro;
