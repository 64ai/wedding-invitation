import clsx from 'clsx';
import bubbles from './chatData';
import ChatBubble from './ChatBubble';
import {Box} from '@mui/material';
import './ChatBubbles.css';

import type {FC} from 'react';

export type ChatBubblesProps = {
};

const ChatBubbles: FC<ChatBubblesProps> = (props) => {
  return (
    <Box className="chat">
      {bubbles.map((bubble, index) => {
        return (
          <Box
            key={bubble.id}
            className={clsx({
              message: true,
              yours: !bubble.mine,
              mine: bubble.mine,
              last: bubble.last,
              map: bubble.type === 'map',
            })}
          >
            <ChatBubble data={bubble} />
          </Box>
        );
      })}
    </Box>
  );
};

export default ChatBubbles;
