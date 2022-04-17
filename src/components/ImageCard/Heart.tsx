import reactDom from 'react-dom';
import type {FC} from 'react';

import {
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  FavoriteOutlined as FavoriteOutlinedIcon,
} from '@mui/icons-material';
import {Box} from '@mui/material';


export type HeartProps = {
};

const Heart: FC<HeartProps> = (props) => {
  return (
    <Box
      sx={{
        '@keyframes flowOne': {
          '0%': {
            opacity: 0,
            bottom: 0,
            left: '14%',
          },
          '40%': {
            opacity: .8,
          },
          '50%': {
            opacity: 1,
            left: 0,
          },
          '60%': {
            opacity: .2,
          },
          '80%': {
            bottom: '80%',
          },
          '100%': {
            opacity: 0,
            bottom: '100%',
            left: '18%',
          },
        },
        position: 'absolute',
        opacity: 0,
        top: 0,
        left: 0,
        animation: 'flowOne 2s linear',
      }}
      component="span"
    >
      <FavoriteOutlinedIcon />
    </Box>
  );
};

export default Heart;
