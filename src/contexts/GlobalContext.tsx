import {createContext} from 'react';
import type {HeaderColor} from '../types/global';

export const GlobalContext = createContext<{ color: HeaderColor; changeColor: Function }>({
  color: 'main',
  changeColor: () => {
    // do nothing
  }
});
