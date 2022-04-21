import {Box} from '@mui/material';
import type {FC} from 'react';

export type RibbonProps = {};

const Ribbon: FC<RibbonProps> = (props) => {
  return (
    <Box sx={{userSelect: 'none'}}>
      <img
        className="unclickable"
        src="/images/confetti3.jpeg"
        alt="confetti"
        width="100%"
      />
    </Box>
  );
};

export default Ribbon;
