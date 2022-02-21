import {Account, Gallery, Intro, Map} from './views/index';
import {MainLayout} from './layouts';
import './App.css';

function App() {
  return (
    <MainLayout>
      <Intro />
      <Gallery />
      <Map />
      <Account />
    </MainLayout>
  );
}

export default App;
