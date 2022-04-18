import './Title.css';
import clsx from 'clsx';

import type {FC} from 'react';

export type TitleProps = {
  className?: string;
  text: string;
  style?: any;
};

const Title: FC<TitleProps> = (props) => {
  const {className, text, style = {}} = props;

  return (
    <h2
      className={clsx('title', className)}
      style={style}
    >
      {text}
    </h2>
  );
};

export default Title;
