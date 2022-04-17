import {forwardRef} from 'react';
import {Box, Typography, useMediaQuery} from '@mui/material';
import {STYLE} from '../../static';

export type NoticeProps = {
};

const Notice = forwardRef<HTMLDivElement>((props, ref) => {
  const text0 = 'Seungnam';
  const text01 = '&  Jonae';
  const text2 = `꼬꼬마 개발자, 막내작가로 만난 우리

힘든 취업난과 넘치는 야근 속에서도
서로 사랑으로 보듬어 주었기에
지금의 멋진 모습으로 성장할 수 있었어요

그동안 서로를 지켜왔던 것처럼
앞으로도 서로 믿고 응원해주며
더 멋진 미래를 함께 만들어 나가려 해요`;
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingY: '60px',
        backgroundColor: STYLE.COLOR.MAIN,
        minHeight: 800,
        marginTop: 10,
      }}
    >
      <Box
        width="84%"
        boxSizing="border-box"
      >
        <Typography
          variant="h3"
          sx={{
            width: '100%',
            textAlign: 'left',
            fontFamily: 'Permanent Marker, sans-serif; font-weight:400; font-style:normal;',
            color: STYLE.COLOR.WHITE,
            whiteSpace: 'pre-line',
            top: 70,
            fontSize:  '50px',
          }}
        >
          {text0}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            width: '100%',
            textAlign: 'right',
            fontFamily: 'Permanent Marker, sans-serif; font-weight:400; font-style:normal;',
            color: STYLE.COLOR.WHITE,
            whiteSpace: 'pre-line',
            top: 70,
            fontSize:  '50px',
            marginBottom: 6,
          }}
        >
          {text01}
        </Typography>
      </Box>
      <Box marginBottom={3.25} textAlign="center" width="100%">
        <img
          src="/wedding-invitation/images/story_image.JPEG"
          width="80%"
          alt="풋풋한 승남이와 정혜"
        />
      </Box>
      <Typography
        sx={{
          width: '100%',
          fontFamily: 'LEFERIPOINT-WHITEOBLIQUEA, sans-serif; font-weight:400; font-style:normal;',
          color: STYLE.COLOR.WHITE,
          whiteSpace: 'pre-line',
          wordBreak: 'keep-all',
          textAlign: 'center',
          fontSize: 15,
        }}
      >
        {text2}
      </Typography>
    </Box>
  );
});

export default Notice;
