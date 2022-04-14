import {ChatBubbles} from '../../components';

import type {FC} from 'react';

export type ConversationProps = {};

const Conversation: FC<ConversationProps> = (props) => {
  return (
    <ChatBubbles />
  );
};

export default Conversation;
