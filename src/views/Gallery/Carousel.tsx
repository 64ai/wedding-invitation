import {Box} from '@mui/material';
import {ImageCard} from '../../components';
import {imageData} from '../../data';
import ImgsViewer from 'react-images-viewer';
import {useCallback, useState} from 'react';

export interface ImageStateType {
  open: boolean;
  currImgIndex: number;
}

export default function Carousel() {
  const [imageState, setImageState] = useState<ImageStateType>({open: false, currImgIndex: 0});

  const openImageViewer = useCallback((open = false, imgIndex = 0) => {
    setImageState({
      open,
      currImgIndex: imgIndex,
    });
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          maxHeight: '400px',
          overflowX: 'scroll',
        }}
      >
        {imageData.map((props) => (
          <ImageCard
            key={props.src}
            onClick={openImageViewer}
            isViewerOpen={imageState.open}
            {...props}
          />
        ))}
      </Box>
      <ImgsViewer
        isOpen={imageState.open}
        // backdropCloseable
        imgs={imageData}
        preventScroll
        currImg={imageState.currImgIndex}
        onClickPrev={() => setImageState(prev => ({...prev, currImgIndex: prev.currImgIndex - 1}))}
        onClickNext={() => setImageState(prev => ({...prev, currImgIndex: prev.currImgIndex + 1}))}
        onClose={(e) => {
          setImageState(prev => ({currImgIndex: 0, open: false}));
        }}
        onClickImg={() => {
          setImageState((prev) => ({...prev, open: false}));
        }}
        // onClickThumbnail={(currImgIndex: number) => {
        //   setImageState(prev => ({...prev, currImgIndex}));
        // }}
      />
    </Box>
  );
}