import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import options from './options';

import type {FC, RefObject} from 'react';

export type ConfettiProps = {
  container?: RefObject<any>;
};

const Confetti: FC<ConfettiProps> = (props) => {
  const {container} = props;
  const particlesInit = async (main: any) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <Particles
      height="440px"
      style={{position: 'absolute', top: -107, zIndex: 100}}
      container={container}
      init={particlesInit}
      options={options}
    />
  );
};

export default Confetti;
