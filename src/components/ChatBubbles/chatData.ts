import type {Bubbles} from './types';

const BubbleData: Bubbles = [
  {
    id: 1,
    mine: false,
    last: false,
    type: 'text',
    content: '승남이랑 정혜 결혼한다며!'
  },
  {
    id: 1,
    mine: false,
    last: true,
    type: 'text',
    content: '어디서 결혼한대?'
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
    content: '여기!!!'
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
    last: true,
    type: 'text',
    content: '근데 걔네 웨딩 사진은 찍었대?'
  },
  // {
  //   id: 6,
  //   mine: true,
  //   last: false,
  //   type: 'text',
  //   content: '당연하지 ㅋㅋ'
  // },
  {
    id: 7,
    mine: true,
    last: false,
    type: 'text',
    content: '너 아직 못 봤어?'
  },
  {
    id: 8,
    mine: true,
    last: true,
    type: 'text',
    content: '밑으로 내려봐'
  },
];

export default BubbleData;
