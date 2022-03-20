import type {FC} from 'react';
import {Title} from '../../components';

export type AccountProps = {
  value?: any;
}

const Account: FC<AccountProps> = (props) => {
  return (
    <Title text="Account" />
  );
};

export default Account;
