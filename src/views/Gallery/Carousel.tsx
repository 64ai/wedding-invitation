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
    if (imageState.open && (imgIndex === 0 || imgIndex === 1)) {
      return;
    }
    setImageState({
      open,
      currImgIndex: imgIndex,
    });
  }, [imageState.open]);

  return (
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
      <ImgsViewer
        isOpen={imageState.open}
        showThumbnails
        backdropCloseable
        imgs={imageData}
        currImg={imageState.currImgIndex}
        onClickPrev={() => setImageState(prev => ({...prev, currImgIndex: prev.currImgIndex - 1}))}
        onClickNext={() => setImageState(prev => ({...prev, currImgIndex: prev.currImgIndex + 1}))}
        onClose={(e) => {
          // console.log(e);
          e?.stopPropagation();
          e?.preventDefault();
          e?.stopPropagation();
          setImageState(prev => ({currImgIndex: -1, open: false}));
        }}
        onClickThumbnail={(currImgIndex: number) => {
          setImageState(prev => ({...prev, currImgIndex}));
        }}
      />
    </Box>
  );
}
