import {useContext, useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import {STYLE} from '../../static';
import {AccessTime as AccessTimeIcon, FmdGood as FmdGoodIcon} from '@mui/icons-material';
import {GlobalContext} from '../../contexts/GlobalContext';
import {useInView} from 'react-intersection-observer';

import type {FC, CSSProperties} from 'react';
import type {HeaderColor} from '../../types/global';

export type HeaderProps = {
  value?: any;
};

const commonStyles = {
  position: 'sticky',
  top: 0,
  height: 30,
  zIndex: 10,
  transition: 'background-color 300ms ease-in',
  padding: 1.5,
  display: 'flex',
  justifyContent: 'space-between',
};

const styles: Record<HeaderColor, CSSProperties> = {
  main: {
    backgroundColor: STYLE.COLOR.MAIN,
    color: STYLE.COLOR.WHITE,
  },
  white: {
    backgroundColor: STYLE.COLOR.WHITE,
    color: STYLE.COLOR.MAIN,
  },
  pink: {
    backgroundColor: STYLE.COLOR.PINK,
    color: STYLE.COLOR.WHITE,
  }
};

const TypographyStyle = {
  fontSize: 11,
  lineHeight: '11px',
  marginLeft: 1.5,
  wordBreak: 'keep-all'
};

const Header: FC<HeaderProps> = (props) => {
  const {color, changeColor} = useContext(GlobalContext);
  const {ref, inView} = useInView();

  useEffect(() => {
    if (color !== 'main' && color !== 'white') {
      return;
    }
    changeColor(inView ? 'white' : 'main');
  }, [changeColor, color, inView]);

  return (
    <>
      <Box ref={ref} position="absolute" height={54}>hello</Box>
      <Box
        id="global-header"
        sx={{
          ...commonStyles,
          ...styles[color]
        }}
      >
        <Box display="flex" alignItems="center">
          <FmdGoodIcon />
          <Typography sx={TypographyStyle}>
            기장 대보름 오시리아 스퀘어
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <AccessTimeIcon />
          <Typography sx={TypographyStyle}>
            2022.06.04 4:00pm
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;
