import type {FC} from 'react';
import {Box} from '@mui/material';

export type DiagonalProps = {
  height: number | string;
  deg: number;
  backgroundColor: string;
  translateY: number;
};

const Diagonal: FC<DiagonalProps> = (props) => {
  const {height, deg, backgroundColor, translateY} = props;

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '46px',
          backgroundColor,
          transform: `translateY(${translateY}px) skewY(4deg)`,
        }}
      />
    </>
  );
};

export default Diagonal;
