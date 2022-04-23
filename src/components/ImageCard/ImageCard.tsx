import {useCallback, useState} from 'react';
import {Box, IconButton} from '@mui/material';
import {
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  FavoriteOutlined as FavoriteOutlinedIcon,
} from '@mui/icons-material';

import type {FC} from 'react';
import type {ImageType} from '../../types/global';

export interface ImageCardProps extends ImageType {
  onClick: (open: boolean, index: number) => void;
  isViewerOpen: boolean;
}

const WIDTH = 330;
const HEIGHT = 440;

const _parse = () => {
  const object = localStorage.getItem('hearts') || '{}';

  try {
    return JSON.parse(object);
  } catch (e) {
    console.error(e);
    return {};
  }
};

const isLikeSaved = (src?: string) => {
  if (!src) return false;

  return Boolean(_parse()[src]);
};

const saveLiked = (src?: string, shouldSave = false) => {
  if (!src) {
    return;
  }

  try {
    const parsedObject = _parse();
    parsedObject[src] = shouldSave;
    const stringified = JSON.stringify(parsedObject);
    localStorage.setItem('hearts', stringified);
  } catch {
    console.error('error');
  }
};

const ImageCard: FC<ImageCardProps> = (props) => {
  const {onClick, isViewerOpen, index, src, scale, x = 0, y = 0, alt} = props;
  const [liked, setLiked] = useState(isLikeSaved(src));

  const handleImageClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(true, index);
  }, [index, onClick]);

  return (
    <Box
      sx={{paddingX: 1}}
      position="relative"
    >
      <Box
        component="span"
        sx={{
          position: 'absolute',
          top: 8,
          right: 16,
        }}
      >
        <IconButton
          onClick={() => {
            setLiked(prev => {
              saveLiked(src, !prev);
              return !prev;
            });
          }}
        >
          {isLikeSaved(src) || liked ? (
            <FavoriteOutlinedIcon
              sx={{color: 'white'}}
            />
          ) : (
            <FavoriteBorderOutlinedIcon
              sx={{color: 'white'}}
            />
          )}
        </IconButton>
      </Box>
      <Box 
        sx={{
          overflow: 'hidden',
          borderRadius: '24px',
          height: HEIGHT,
          width: WIDTH,
        }}
      >
        <Box
          onClick={handleImageClick}
          sx={{
            width: '100%',
            height: '100%',
            background: `url(${src}) no-repeat`,
            backgroundPosition: `${x}px, ${y}px`,
            backgroundSize: 'cover',
            ...(scale) ? {transform: `scale(${scale})`} : {}
          }}
        />
      </Box>
    </Box>
  );
};

export default ImageCard;
