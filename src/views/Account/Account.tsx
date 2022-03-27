import {Title} from '../../components';
import './Account.css';

import type {FC} from 'react';

export type AccountProps = {
  value?: any;
};

const Account: FC<AccountProps> = (props) => {
  return (
    <article>
      <Title text="마음 전하실 곳" />
    </article>
  );
};

export default Account;
