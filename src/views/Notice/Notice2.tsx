import {useRef} from 'react';
import {Box, Button, Slide, Typography} from '@mui/material';
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
  const {ref: noteRef, inView: noteInView} = useInView(
    {
      threshold: 0.9,
      delay: 2800,
      triggerOnce: true,
    });

  const text1 = 'SEE YOU SOON!';
  const text2 = 'NOTICE';
  const text3 = `공간이 협소하여 
정확한 인원 파악이 필요합니다
밑에 버튼을 눌러 
참석 유무를 알려주세요!
↓`;
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '60px',
        paddingTop: '30px',
        backgroundColor: '#e5d2e0',
        height: 300,
      }}
    >
      <div style={{width: '100%', position: 'relative'}}>
        <Diagonal
          backgroundColor="#e5d2e0"
          height="120px"
          deg={7}
          translateY={-122}
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
      <Box width="100%" ref={noteRef} sx={{position: 'absolute', bottom: 0}}>
        <Slide direction="right" in={noteInView} timeout={2000}>
          <Box>
            <img
              src="/wedding-invitation/images/sticky_note.png"
              width="390"
              style={{transform: 'translate(-33px, 7px)'}}
            />
            <Box sx={{
              position: 'absolute',
              top: 68,
              left: 156,
              transform: 'rotate(-13.3deg)',
              textAlign: 'center',
            }}
            >
              <Typography
                sx={{
                  fontFamily: 'Permanent Marker, sans-serif; font-weight:400; font-style:normal;',
                  whiteSpace: 'pre-line',
                  fontSize: 20,
                  marginBottom: 1.5,
                }}
              >
                {text2}
              </Typography>
              <Typography
                sx={{
                  whiteSpace: 'pre-line',
                  fontSize: 12,
                }}
              >
                {text3}
              </Typography>
              <Button
                component="a"
                variant="contained"
                target="_blank"
                href="https://forms.gle/mU7i9aLmGdsrC8gk6"
                sx={{
                  height: '25px',
                  paddingX: 1,
                  marginTop: 1,
                  backgroundColor: STYLE.COLOR.BLACK,
                  color:  STYLE.COLOR.YELLOW,
                  '&:hover': {
                    opacity: 0.9,
                    backgroundColor: STYLE.COLOR.BLACK,
                    color:  STYLE.COLOR.YELLOW,
                  },
                  '@keyframes wiggle': {
                    'from': {
                      transform: 'rotate(3deg)'
                    },
                    'to': {
                      transform: 'rotate(-3deg)'
                    }
                  },
                  animation: 'wiggle 0.5s ease-in-out alternate infinite'
                }}
              >
                click
              </Button>
            </Box>
          </Box>
        </Slide>
      </Box>
    </Box>
  );
};

export default Notice;
