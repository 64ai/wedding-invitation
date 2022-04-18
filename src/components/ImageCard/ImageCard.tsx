import {useEffect, useState} from 'react';
import {Box, IconButton} from '@mui/material';
import {
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  FavoriteOutlined as FavoriteOutlinedIcon,
} from '@mui/icons-material';

import type {FC} from 'react';
import Heart from './Heart';

export type ImageCardProps = {
  src?: string;
  alt?: string;
  x: number;
  y: number;
};

const WIDTH = 300;
const HEIGHT = 400;

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
  const [showHeart, setShowHeart] = useState(false);

  // useEffect(() => {
  //   console.log(showHeart);
  //   if (!showHeart) {
  //     return;
  //   }
  //
  //   // const timer = setTimeout(() => {
  //   //   setShowHeart(false);
  //   // }, 2000);
  //   //
  //   // return () => {
  //   //   clearTimeout(timer);
  //   // };
  // }, [showHeart]);

  return (
    <Box
      sx={{
        paddingX: 1,
        // '&:first-of-type':{
        //   paddingLeft: 0,
        // },
        // '&:last-of-type':{
        //   paddingRight: 0,
        // }
      }}
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
            // setShowHeart(true);
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
        {showHeart && (
          <Heart />
        )}
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
