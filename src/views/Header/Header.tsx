import type {FC} from 'react';
import {Box, Typography} from '@mui/material';
import {STYLE} from '../../static';
import {useEffect, useState} from 'react';
import {AccessTime as AccessTimeIcon, FmdGood as FmdGoodIcon} from '@mui/icons-material';

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

const styles = {
  main: {
    backgroundColor: STYLE.COLOR.MAIN,
    color: STYLE.COLOR.WHITE,
  },
  white: {
    backgroundColor: STYLE.COLOR.WHITE,
    color: STYLE.COLOR.MAIN,
  },
};

const TypographyStyle = {
  fontSize: 11,
  lineHeight: '11px',
  marginLeft: 1.5,
  wordBreak: 'keep-all'
};

const Header: FC<HeaderProps> = (props) => {
  const {value} = props;
  const [bgColor, setBgColor] = useState<keyof typeof styles>('white');

  // TODO: change to intersection observer
  const changeHeaderColor = () => {
    if (window.scrollY > 30) {
      setBgColor('main');
    } else if (window.scrollY <= 30) {
      setBgColor('white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderColor);

    return () => {
      window.removeEventListener('scroll', changeHeaderColor);
    };
  }, []);

  return (
    <Box
      id="global-header"
      sx={{
        ...commonStyles,
        ...styles[bgColor]
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
  );
};

export default Header;
