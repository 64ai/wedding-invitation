import type {Bubbles} from './types';


const BubbleData: Bubbles = [
  {
    id: 1,
    mine: false,
    last: true,
    type: 'text',
    content: '근데 어디서 결혼한대?'
  },
  {
    id: 2,
    mine: true,
    last: false,
    type: 'map',
    content: {
      url: 'map',
    }
  },
  {
    id: 3,
    mine: true,
    last: true,
    type: 'text',
    content: '여기 봐봐!'
  },
  {
    id: 4,
    mine: false,
    last: false,
    type: 'text',
    content: '오 기장에서 하는구나'
  },
  {
    id: 5,
    mine: false,
    last: false,
    type: 'text',
    content: '근데 나 아직 웨딩 사진도 못봤는데...'
  },
  {
    id: 6,
    mine: false,
    last: true,
    type: 'text',
    content: '너 봤어?'
  },
  {
    id: 7,
    mine: true,
    last: true,
    type: 'text',
    content: '내가 보여줄게! 밑으로 내려봐'
  },
];

export default BubbleData;
