import {useEffect, useRef, useState} from 'react';
import {Box, Button, Slide, Typography} from '@mui/material';
import {useInView} from 'react-intersection-observer';
import {STYLE} from '../../static';
import {Confetti, Diagonal} from '../../components';

const Notice = () => {
  const ref = useRef();
  const {ref: typographyRef, inView} = useInView(
    {
      threshold: 1.0,
      triggerOnce: true,
    });
  const {ref: noteRef, inView: noteInView} = useInView(
    {
      threshold: 1.0,
      triggerOnce: true,
    });

  const [showNote, setShowNote] = useState<boolean>(false);

  const text1 = 'SEE YOU SOON!';
  const text2 = 'NOTICE';
  const text3 = `결혼식이 진행될 공간이 협소하여 
정확한 인원 파악이 필요합니다
아래 버튼을 눌러 
참석 유무를 알려주세요!
↓`;

  useEffect(() => {
    if (noteInView) {
      setTimeout(() => {
        setShowNote(true);
      }, 1000);
    }
  }, [noteInView]);

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '60px',
        paddingTop: '42px',
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
      <Box width="100%" ref={noteRef} sx={{position: 'absolute', bottom: -24}}>
        <Slide direction="right" in={showNote} timeout={2000}>
          <Box overflow="hidden">
            <img
              src="/images/sticky_note.png"
              alt="sticky note"
              width="390"
              style={{transform: 'translate(-60px, -4px)'}}
            />
            <Box sx={{
              position: 'absolute',
              top: 52,
              left: 118,
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
                  fontSize: 13,
                }}
              >
                {text3}
              </Typography>
              <Button
                component="a"
                variant="contained"
                target="_blank"
                // href="https://forms.gle/mU7i9aLmGdsrC8gk6"
                href="https://tally.so/r/nWxxLm"
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
