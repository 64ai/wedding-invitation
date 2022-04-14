import type {FC} from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import {useQuery} from '../../hooks';

export type ConfettiProps = {
};

const Confetti: FC<ConfettiProps> = (props) => {
  const {confetti} = useQuery();
  if (!confetti) {
    return null;
  }
  const particlesInit = async (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  return (
    <div style={{height: '100px'}}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        // loaded={particlesLoaded}
        options={{
          'emitters': [
            {
              'position': {
                'x': 0,
                'y': 30
              },
              'rate': {
                'quantity': 5,
                'delay': 0.15
              },
              'particles': {
                'move': {
                  'direction': 'top-right',
                  'outModes': {
                    'top': 'none',
                    'left': 'none',
                    'default': 'destroy'
                  }
                }
              }
            },
            {
              'position': {
                'x': 100,
                'y': 30
              },
              'rate': {
                'quantity': 5,
                'delay': 0.15
              },
              'particles': {
                'move': {
                  'direction': 'top-left',
                  'outModes': {
                    'top': 'none',
                    'right': 'none',
                    'default': 'destroy'
                  }
                }
              }
            }
          ],
          'particles': {
            'color': {
              'value': [
                '#ffffff',
                '#FF0000'
              ]
            },
            'move': {
              'decay': 0.05,
              'direction': 'top',
              'enable': true,
              'gravity': {
                'enable': true
              },
              'outModes': {
                'top': 'none',
                'default': 'destroy'
              },
              'speed': {
                'min': 10,
                'max': 50
              }
            },
            'number': {
              'value': 0
            },
            'opacity': {
              'value': 1
            },
            'rotate': {
              'value': {
                'min': 0,
                'max': 360
              },
              'direction': 'random',
              'animation': {
                'enable': true,
                'speed': 30
              }
            },
            'tilt': {
              'direction': 'random',
              'enable': true,
              'value': {
                'min': 0,
                'max': 360
              },
              'animation': {
                'enable': true,
                'speed': 30
              }
            },
            'size': {
              'value': {
                'min': 0,
                'max': 2
              },
              'animation': {
                'enable': true,
                'startValue': 'min',
                'count': 1,
                'speed': 16,
                'sync': true
              }
            },
            'roll': {
              'darken': {
                'enable': true,
                'value': 25
              },
              'enable': true,
              'speed': {
                'min': 5,
                'max': 15
              }
            },
            'wobble': {
              'distance': 30,
              'enable': true,
              'speed': {
                'min': -7,
                'max': 7
              }
            },
            'shape': {
              'type': [
                'circle',
                'square'
              ],
              'options': {}
            }
          }
        }
        }
      />
    </div>
  );
};

export default Confetti;
