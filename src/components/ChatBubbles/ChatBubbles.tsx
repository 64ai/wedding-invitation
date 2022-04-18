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
          <ChatBubble
            index={index}
            key={bubble.id}
            data={bubble}
          />
        );
      })}
    </Box>
  );
};

export default ChatBubbles;
