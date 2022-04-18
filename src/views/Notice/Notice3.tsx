import {forwardRef} from 'react';
import {Box, Button, Link, Typography, useMediaQuery} from '@mui/material';
import {STYLE} from '../../static';

export type NoticeProps = {};

const Notice = forwardRef<HTMLDivElement>((props, ref) => {
  // TODO: https://fonts.google.com/specimen/Montserrat+Subrayada?preview.text=NOTICE&preview.text_type=custom
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
        paddingY: '60px',
        backgroundColor: '#f9dd53',
        color: '#5b5757'
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
        >
          Google FORM
        </Button>
      </Box>
    </Box>
  );
});

export default Notice;
