import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import {useQuery} from '../../hooks';
import options from './options';

import type {FC, RefObject} from 'react';

export type ConfettiProps = {
  container?: RefObject<any>;
};

const Confetti: FC<ConfettiProps> = (props) => {
  const {container} = props;
  // const {confetti} = useQuery();
  // if (!confetti) {
  //   return null;
  // }
  const particlesInit = async (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Particles
      height="440px"
      style={{position: 'absolute', top: -107, zIndex: 100}}
      container={container}
      init={particlesInit}
      // loaded={particlesLoaded}
      options={options}
    />
  );
};

export default Confetti;
