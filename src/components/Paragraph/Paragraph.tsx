import type {FC} from 'react';

export type ParagraphProps = {
  text: any;
};

const Paragraph: FC<ParagraphProps> = (props) => {
  const {text} = props;

  return (
    <p 
      style={{
        textAlign: 'center',
        wordBreak: 'break-all',
        whiteSpace: 'pre-line',
      }}
    >
      {text}
    </p>
  );
};

export default Paragraph;
