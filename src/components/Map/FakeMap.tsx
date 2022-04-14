import {Box, Dialog, DialogTitle, DialogContent, IconButton} from '@mui/material';
import {Close as CloseIcon} from '@mui/icons-material';
import {useState} from 'react';
import {Map} from '../Map';

import type {FC} from 'react';

export type FakeMapProps = {
};

const FakeMap: FC<FakeMapProps> = (props) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  
  return (
    <>
      <Box
        onClick={handleDialogOpen}
        sx={{
          height: '100%',
          width: '100%',
          background: 'url(/wedding-invitation/images/fakemap2.png)',
          backgroundSize: 'cover',
          borderRadius: '15px',
          overflow: 'hidden',
          backgroundPositionX: '-24px',
        }}
      >
      </Box>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        sx={{
          '& .MuiPaper-root': {
            width: '80%',
            height: '40%',
          }
        }}
      >
        <DialogTitle>
          지도 크게 보기
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[700],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box height="200px">
            <Map />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FakeMap;
