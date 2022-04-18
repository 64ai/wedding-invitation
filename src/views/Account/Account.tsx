import {Title} from '../../components';
import './Account.css';

import type {FC} from 'react';
import {Box, Typography} from '@mui/material';
import {STYLE} from '../../static';

export type AccountProps = {
  value?: any;
};

const Account: FC<AccountProps> = (props) => {
  return (
    <Box
      // component="article"
      sx={{
        paddingBottom: 5,
        textAlign: 'center',
        backgroundColor: STYLE.COLOR.MAIN,
        color:  STYLE.COLOR.WHITE,
        border: 'none',
      }}
    >
      <Typography variant="h2" gutterBottom>🕊</Typography>
      <div style={{textAlign: 'center'}}>황정혜 국민은행 115302-04-107751</div>
      <div style={{textAlign: 'center'}}>노승남 토스뱅크 1000-0034-9315</div>
    </Box>
  );
};

export default Account;
