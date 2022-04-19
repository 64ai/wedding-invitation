import {Box, IconButton, Typography, useMediaQuery} from '@mui/material';
import {Close as CloseIcon} from '@mui/icons-material';
import {useMemo, useState} from 'react';

import type {FC} from 'react';

export type WarningProps = {

};

const Warning: FC<WarningProps> = (props) => {
  const isLarger = useMediaQuery('(min-width:600px)');
  const [isOpen, setOpen] = useState<boolean>(true);

  const handleClick = () => {
    setOpen(false);
    localStorage.setItem('warning', 'true');
  };
  const shouldShow = useMemo(() => {
    return isOpen && isLarger && localStorage.getItem('warning') !== 'true';
  }, [isLarger, isOpen]);

  return shouldShow ? (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingY: 1,
        paddingX: 2,
        backgroundColor: '#FFE254',
        color: '#FF743A',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'LEFERIPOINT-WHITEOBLIQUEA, sans-serif; font-weight:400; font-style:normal;',
          fontWeight: 'bold',
          height: 'fit-content'
        }}
      >
        가로 600px 이하 모바일 기기에 최적화되어 있습니다. 😅
      </Typography>
      <IconButton onClick={handleClick}>
        <CloseIcon />
      </IconButton>
    </Box>
  ) : null;
};

export default Warning;
