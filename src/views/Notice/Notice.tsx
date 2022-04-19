import {forwardRef} from 'react';
import {Box, Typography} from '@mui/material';
import {STYLE} from '../../static';

const Notice = forwardRef<HTMLDivElement>((props, ref) => {
  // TODO: https://fonts.google.com/specimen/Syncopate?preview.text=see%20you%20soon!&preview.text_type=custom
  const text1 = `열심히 준비했지만
둘 다 결혼이 처음이라
부족한 부분도 있을 거예요
그래도 사랑하는 친구들과 함께라면
아주 멋진 결혼식이 될 것 같아요!
`;
  const text2 = `
그럼 우리,

`;

  const text3 = `여름의 시작에서
  
`;
  const text4 = `뜨겁게 만나요!
  
`;
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '60px',
        backgroundColor: '#ef7f97',
        marginTop: 10,
        minHeight: 400,
      }}
    >
      <Box sx={{
        content: '""',
        bottom: '-5px',
        display: 'block',
        width: '138px',
        height: '10px',
        backgroundImage: 'url("data:image/svg+xml,<svg width=\'52\' height=\'10\' viewBox=\'0 0 52 10\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><path fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M26.3456 5.5155C19.8495 0.496856 10.2374 1.20194 0 6.47465V4.4622C10.5562 -0.974704 20.1801 -1.77683 27.5464 3.91414C30.8728 6.48396 34.3418 7.8579 38.203 7.97617C42.0826 8.09501 46.8952 7.09206 52 4.46288V6.47534C46.708 9.20097 42.4583 10.1199 38.1432 9.98771C33.8097 9.85497 29.9504 8.30049 26.3456 5.5155Z\' fill=\'%23faf6f9\'/></svg>")',
        marginBottom: 5.5,
      }}
      >
      </Box>
      <Typography
        sx={{
          width: '100%',
          fontFamily: 'Cafe24SsurroundAir, sans-serif; font-weight:400; font-style:normal;',
          color: STYLE.COLOR.WHITE,
          whiteSpace: 'pre-line',
          wordBreak: 'keep-all',
          textAlign: 'center',
          fontSize: 15,
          marginBottom: 3.25,
        }}
      >
        {text1}
      </Typography>
      <Typography
        sx={{
          width: '100%',
          fontFamily: 'Cafe24SsurroundAir, sans-serif; font-weight:400; font-style:normal;',
          color: STYLE.COLOR.WHITE,
          whiteSpace: 'pre-line',
          wordBreak: 'keep-all',
          textAlign: 'center',
          fontSize: 19,
        }}
      >
        {text2}
      </Typography>
      <Typography
        sx={{
          width: '100%',
          fontFamily: 'Cafe24SsurroundAir, sans-serif; font-weight:400; font-style:normal;',
          color: STYLE.COLOR.WHITE,
          whiteSpace: 'pre-line',
          wordBreak: 'keep-all',
          textAlign: 'center',
          fontSize: 23,
        }}
      >
        {text3}
      </Typography>
      <Typography
        sx={{
          width: '100%',
          fontFamily: 'Cafe24SsurroundAir, sans-serif; font-weight:400; font-style:normal;',
          color: STYLE.COLOR.WHITE,
          whiteSpace: 'pre-line',
          wordBreak: 'keep-all',
          textAlign: 'center',
          fontSize: 27,
        }}
      >
        {text4}
      </Typography>
      <Typography
        sx={{
          width: '100%',
          fontFamily: 'Cafe24SsurroundAir, sans-serif; font-weight:400; font-style:normal;',
          color: STYLE.COLOR.WHITE,
          whiteSpace: 'pre-line',
          wordBreak: 'keep-all',
          textAlign: 'center',
          fontSize: 140,
          zIndex: 2,
          lineHeight: 1,
        }}
      >
        🍸
      </Typography>
    </Box>
  );
});

export default Notice;
