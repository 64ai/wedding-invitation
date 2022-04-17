import {Title} from '../../components';
import './Account.css';

import type {FC} from 'react';
import {Typography} from '@mui/material';

export type AccountProps = {
  value?: any;
};

const Account: FC<AccountProps> = (props) => {
  return (
    <article>
      <Typography variant="h2" sx={{marginY: 10,textAlign: 'center'}}>🕊</Typography>
      <div style={{textAlign:'center'}}>황정혜 3333-05-1287068</div>
      <div style={{textAlign:'center'}}>노승남 3333-05-1287068</div>
    </article>
  );
};

export default Account;
