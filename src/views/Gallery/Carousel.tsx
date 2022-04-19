import {Box} from '@mui/material';
import {ImageCard} from '../../components';
import {imageData} from '../../data';

export default function Carousel() {
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
          {...props}
        />
      ))}
    </Box>
  );
}
