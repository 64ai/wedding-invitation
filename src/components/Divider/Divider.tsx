import './Divider.css';

import type {FC} from 'react';

export type DividerProps = {}

const Divider: FC<DividerProps> = (props) => {
  return (
    <div className="divider"/>
  );
};

export default Divider;
