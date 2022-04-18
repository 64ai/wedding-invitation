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
          position: 'absolute',
          height,
          backgroundColor,
          transform: `translateY(${translateY}px) skewY(5deg)`,
        }}
      />
    </>
  );
};

export default Diagonal;
