import {Map} from '../Map';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

import type {FC} from 'react';
import type {Bubble} from './types';
import {Box, Zoom} from '@mui/material';
import clsx from 'clsx';

export type ChatBubbleProps = {
  data: Bubble;
  index: number;
};

const ChatBubble: FC<ChatBubbleProps> = (props) => {
  const {data, index} = props;
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 1.0,
    rootMargin: `-${index * 10 + 5}px`,
    delay: 300,
  });
  const {type} = data;

  if (type === 'text') {
    return (
      <Zoom in={inView} timeout={700}>
        <Box
          ref={ref}
          key={data.id}
          className={clsx({
            message: true,
            yours: !data.mine,
            mine: data.mine,
            last: data.last,
          })}
        >
          <div>{data.content}</div>
        </Box>
      </Zoom>
    );
  }

  if (type === 'map') {
    return (
      <Zoom in={inView} timeout={700}>
        <Box
          ref={ref}
          key={data.id}
          className={clsx({
            message: true,
            yours: !data.mine,
            mine: data.mine,
            last: data.last,
            map: data.type === 'map',
          })}
        >
          <div style={{height: '100%'}}>
            <div style={{height: '100%', width: '100%'}}>
              <Map />
            </div>
          </div>
        </Box>
      </Zoom>
    );
  }

  return (
    <div></div>
  );
};

export default ChatBubble;
