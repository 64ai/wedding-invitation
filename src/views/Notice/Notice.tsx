import {useContext, useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import {STYLE} from '../../static';
import {Wave} from '../../components';
import {useInView} from 'react-intersection-observer';
import {GlobalContext} from '../../contexts/GlobalContext';

const Notice = () => {
  const {ref, inView} = useInView({
    initialInView: false
  });
  const {color, changeColor} = useContext(GlobalContext);

  const text1 = `열심히 준비했지만
부족한 부분이 있을 거예요
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

  useEffect(() => {
    if (color !== 'main' && color !== 'pink') {
      return;
    }
    if (color === 'main' && inView) {
      changeColor('pink');
    } else if (color === 'pink' && !inView) {
      changeColor('main');
    }
  }, [changeColor, color, inView]);

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
      <Wave />
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
};

export default Notice;
