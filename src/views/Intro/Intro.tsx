import {useTheme} from '@mui/material/styles';
import type {FC} from 'react';
import {Box, Typography, useMediaQuery} from '@mui/material';
import {STYLE} from '../../static';

export type IntroProps = {
  value?: any;
};

const Intro: FC<IntroProps> = (props) => {
  const {value} = props;
  const theme = useTheme();
  const isLarger = useMediaQuery('(min-width:370px)');

  const text = '안녕하세요\n저희는 승남이와 정혜예요.\n 저희가 결혼하게 되었는데요, \n많이 와주세요\n그럼 안넝~';
  return (
    <article>
      <Box position="relative" display="flex" justifyContent="center">
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Josefin Slab',
            color: STYLE.COLOR.MAIN,
            position: 'absolute',
            top: isLarger ? 70 : 50,
            fontSize: isLarger ? '30px' : '20px' 
          }}
        >
          We&apos;re Getting Married !
        </Typography>
        <Box>
          <img src="/wedding-invitation/images/main.jpg" alt="main image" width="100%" height="100%" />
        </Box>
      </Box>
    </article>
  );
};

export default Intro;
