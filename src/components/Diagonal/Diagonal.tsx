import type {FC} from 'react';
import {Box} from '@mui/material';

export type DiagonalProps = {
  height: number | string;
  deg: number;
  backgroundColor: string;
  translateY: number;
};

const Diagonal: FC<DiagonalProps> = (props) => {
  const {height, deg = 5, backgroundColor, translateY} = props;

  return (
    <>
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          height,
          backgroundColor,
          transform: `translateY(${translateY}px) skewY(${deg}deg)`,
        }}
      />
    </>
  );
};

export default Diagonal;
