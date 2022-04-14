// TODO: conditional type
export type BubbleType = 'text' | 'map' | 'image';
export interface CommonBubble {
  id: number;
  mine?: boolean;
  last?: boolean;
  type: BubbleType;
}

export interface TextBubble extends CommonBubble{
  type: 'text';
  content: string;
}

export interface MapBubble extends CommonBubble{
  type: 'map';
  content: {
   url: string;
  };
}

export interface ImageBubble extends CommonBubble{
  type: 'image';
  content: {
    url: string;
  };
}

export type Bubble = TextBubble | MapBubble | ImageBubble;
export type Bubbles = Array<Bubble>;
