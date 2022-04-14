import {Map} from '../Map';

import type {FC} from 'react';
import type {Bubble} from './types';
import {Box} from '@mui/material';
import FakeMap from '../Map/FakeMap';

export type ChatBubbleProps = {
  data: Bubble;
};

const ChatBubble: FC<ChatBubbleProps> = (props) => {
  const {data} = props;
  const {type} = data;

  if (type === 'text') {
    return <>{data.content}</>;
  }

  if (type === 'map') {
    return (
      <div style={{height: '100%'}}>
        <div style={{height: '100%', width: '100%'}}>
          <Map />
        </div>
      </div>
    );
  }

  return (
    <div></div>
  );
};

export default ChatBubble;
