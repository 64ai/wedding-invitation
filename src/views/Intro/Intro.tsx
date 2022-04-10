import type {FC} from 'react';
import {Box, Typography, useMediaQuery} from '@mui/material';
import {STYLE} from '../../static';

export type IntroProps = {
  value?: any;
};

const Intro: FC<IntroProps> = (props) => {
  const {value} = props;
  const isLarger = useMediaQuery('(min-width:370px)');

  return (
    <article>
      <Box position="relative" display="flex" justifyContent="center">
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Josefin Slab; sans-serif; font-weight:400; font-style:italic;',
            color: STYLE.COLOR.MAIN,
            position: 'absolute',
            top: isLarger ? 70 : 50,
            fontSize: isLarger ? '30px' : '20px' 
          }}
        >
          We&apos;re Getting Married !
        </Typography>
        <Box>
          <img src="/wedding-invitation/images/main.jpg" alt="main image" width="100%" height="100%" />
        </Box>
      </Box>
    </article>
  );
};

export default Intro;
