import {forwardRef} from 'react';
import {Box, Typography, useMediaQuery} from '@mui/material';
import {STYLE} from '../../static';

export type IntroProps = {};

const Intro = forwardRef<HTMLElement, IntroProps>((props, ref) => {
  const isLarger = useMediaQuery('(min-width:370px)');

  return (
    <article ref={ref}>
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        minHeight={500}
      >
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
          <img className="unclickable" src="images/main-real-min.jpg" alt="main" width="100%" height="100%" />
        </Box>
      </Box>
    </article>
  );
});

export default Intro;
