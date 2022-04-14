import type {FC} from 'react';
import {Box} from '@mui/material';

export type FakeMapProps = {
};

const FakeMap: FC<FakeMapProps> = (props) => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        background: 'url(/wedding-invitation/images/fakemap2.png)',
        backgroundSize: 'cover',
        borderRadius: '15px',
        overflow: 'hidden',
        backgroundPositionX: '-24px',
      }}
    >
    </Box>
  );
};

export default FakeMap;
