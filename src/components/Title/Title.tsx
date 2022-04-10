import './Title.css';
import clsx from 'clsx';

import type {FC} from 'react';

export type TitleProps = {
  className?: string;
  text: string;
};

const Title: FC<TitleProps> = (props) => {
  const {className,text} = props;

  return (
    <h2 className={clsx('title', className)}>{text}</h2>
  );
};

export default Title;
