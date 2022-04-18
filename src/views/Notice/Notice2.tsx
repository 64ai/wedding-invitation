import {forwardRef, useRef} from 'react';
import {Box, Typography} from '@mui/material';
import {useInView} from 'react-intersection-observer';
import {STYLE} from '../../static';
import {Diagonal} from '../../components';

export type NoticeProps = {};

const Notice = forwardRef<HTMLDivElement>((props, ref) => {
  // TODO: https://fonts.google.com/specimen/Syncopate?preview.text=see%20you%20soon!&preview.text_type=custom
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
        paddingY: '60px',
        backgroundColor: '#e5d2e0',
        height: 400,
      }}
    >
      <Diagonal
        backgroundColor="#e5d2e0"
        height="200px"
        deg={11}
        translateY={-200}
      />
      <Typography
        ref={typographyRef}
        sx={{
          width: '100%',
          fontFamily: 'Cabin Sketch, sans-serif; font-weight:400; font-style:normal;',
          color: '#09a1be',
          whiteSpace: 'pre-line',
          wordBreak: 'keep-all',
          textAlign: 'center',
          fontSize: 50,
          '@keyframes rotate': {
            '0%': {
              transform: 'scale(0%)',
            },
            // '75%': {
            //   transform: 'scale(150%)',
            // },
            '100%': {
              transform: 'scale(100%)',
            }
          },
          opacity: inView ? 1.0 : 0,
          animation: inView ? 'rotate 1s ease-out' : 'none',
        }}
      >
        {text1}
      </Typography>
      <Diagonal
        backgroundColor="#e5d2e0"
        height="200px"
        deg={11}
        translateY={197}
      />
    </Box>
  );
});

export default Notice;
