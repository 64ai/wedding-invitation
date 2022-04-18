import {forwardRef, useRef} from 'react';
import {Box, Typography} from '@mui/material';
import {useInView} from 'react-intersection-observer';
import {STYLE} from '../../static';
import {Confetti, Diagonal} from '../../components';

export type NoticeProps = {};

const Notice = () => {
  const ref = useRef();
  const {ref: typographyRef, inView} = useInView(
    {
      threshold: 1.0,
      triggerOnce: true,
    });

  const text1 = 'SEE YOU SOON!';
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '60px',
        backgroundColor: '#e5d2e0',
        height: 200,
      }}
    >
      <div style={{width: '100%', position: 'relative'}}>
        <Diagonal
          backgroundColor="#e5d2e0"
          height="120px"
          deg={7}
          translateY={-128}
        />
        <Typography
          ref={typographyRef}
          sx={{
            width: '100%',
            fontFamily: 'Cabin Sketch, sans-serif; font-weight:400; font-style:normal;',
            color: '#09a1be',
            // color: '#ff6825',
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
            textAlign: 'center',
            fontSize: 50,
            '@keyframes show': {
              '0%': {
                transform: 'scale(0%)',
              },
              '100%': {
                transform: 'scale(100%)',
              }
            },
            opacity: inView ? 1.0 : 0,
            animation: inView ? 'show 1s ease-out' : 'none',
          }}
        >
          {text1}
        </Typography>
        {inView && <Confetti container={ref.current} />}
      </div>
    </Box>
  );
};

export default Notice;
