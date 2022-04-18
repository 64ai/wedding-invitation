import {forwardRef} from 'react';
import {Box, Button, Typography} from '@mui/material';
import {STYLE} from '../../static';
import {Accordion} from '../../components';

export type NoticeProps = {};

const Notice = forwardRef<HTMLDivElement>((props, ref) => {
  const text2 = `결혼식이 진행되는 곳이 
웨딩홀이 아닌 관계로
공간이 협소하여 
정확한 인원 파악이 필요합니다
밑에 버튼을 눌러 참석 유무를 알려주세요! `;
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '96px',
        paddingBottom: '60px',
        backgroundColor: STYLE.COLOR.MAIN,
        color:  STYLE.COLOR.WHITE,
      }}
    >
      <Typography
        sx={{
          width: '100%',
          fontFamily: 'Montserrat Subrayada, sans-serif; font-weight:400; font-style:normal;',
          // color: STYLE.COLOR.WHITE,
          whiteSpace: 'pre-line',
          wordBreak: 'keep-all',
          textAlign: 'center',
          fontSize: 40,
          marginBottom: 4,
        }}
      >
        NOTICE
      </Typography>
      <Typography
        sx={{
          width: '100%',
          fontFamily: 'LEFERIPOINT-WHITEOBLIQUEA, sans-serif; font-weight:400; font-style:normal;',
          // color: STYLE.COLOR.WHITE,
          whiteSpace: 'pre-line',
          wordBreak: 'keep-all',
          textAlign: 'center',
          fontSize: 15,
        }}
      >
        {text2}
      </Typography>
      <Box marginTop={2}>
        <Button
          component="a"
          variant="contained"
          target="_blank"
          href="https://forms.gle/mU7i9aLmGdsrC8gk6"
          sx={{
            backgroundColor: STYLE.COLOR.WHITE,
            color:  STYLE.COLOR.MAIN,
            '&:hover': {
              opacity: 0.9,
              backgroundColor: STYLE.COLOR.WHITE,
              color:  STYLE.COLOR.MAIN,
            },
            '@keyframes wiggle': {
              'from': {
                transform: 'rotate(3deg)'
              },
              'to': {
                transform: 'rotate(-3deg)'
              }
            },
            animation: 'wiggle 1s ease-in-out alternate infinite'
          }}
        >
          Google FORM
        </Button>
      </Box>
      <Box marginTop={10} textAlign="center" width="65%">
        {/*<Typography variant="h2" gutterBottom>👫 </Typography>*/}
        <Box display="flex" justifyContent="center">
          <Accordion />
        </Box>
        {/*<div style={{textAlign: 'center'}}>황정혜 국민은행 115302-04-107751</div>*/}
        {/*<div style={{textAlign: 'center'}}>노승남 토스뱅크 1000-0034-9315</div>*/}
      </Box>
    </Box>
  );
});

export default Notice;
