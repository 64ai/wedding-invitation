import {useState} from 'react';
import {Box, IconButton} from '@mui/material';
import {
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  FavoriteOutlined as FavoriteOutlinedIcon,
} from '@mui/icons-material';

import type {FC} from 'react';

export type ImageCardProps = {
  src?: string;
  alt?: string;
  x: number;
  y: number;
};

const WIDTH = 250;
const HEIGHT = 300;

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
  const {src, x = 0, y = 0} = props;
  const [liked, setLiked] = useState(isLikeSaved(src));

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
          borderRadius: '24px',
          background: `url(${src})`,
          backgroundPosition: `${x}px, ${y}px`,
          backgroundSize: 'cover',
          height: HEIGHT,
          width: WIDTH,
        }}
      />
    </Box>
  );
};

export default ImageCard;
