import './Title.css';

import type {FC} from 'react';

export type TitleProps = {
  text: string;
};

const Title: FC<TitleProps> = (props) => {
  const {text} = props;

  return (
    <h2 className="title">{text}</h2>
  );
};

export default Title;
