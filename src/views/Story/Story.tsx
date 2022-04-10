import type {FC} from 'react';
import {Box, Typography} from '@mui/material';
import {STYLE} from '../../static';

export type StoryProps = {};

const Story: FC<StoryProps> = (props) => {
  const text = `
  꼬꼬마 개발자, 막내 작가로 만나
힘든 취업난과 넘치는 야근 속에서도
서로 사랑으로 보듬어 주었기에
지금의 멋진 모습으로 성장할 수 있었어요

그동안 서로를 지켜왔던 것처럼
앞으로도 서로 믿고 응원해주며
더 멋진 미래를 함께 만들어 나가려 해요`;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '100px 20px',
        backgroundColor: STYLE.COLOR.MAIN,
        height: window.innerHeight,
      }}
    >
      <Typography sx={{
        width: '100%',
        fontFamily: 'LEFERIPOINT-WHITEOBLIQUEA, sans-serif; font-weight:400; font-style:normal;',
        color: STYLE.COLOR.WHITE,
        whiteSpace: 'pre-line',
        textAlign: 'center',
        fontSize: 20,
      }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Story;
