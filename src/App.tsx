import {Account, Gallery, Intro, Map} from './views/index';
import {MainLayout} from './layouts';

function App() {
  return (
    <MainLayout>
      <Intro />
      <img 
        src="/wedding-invitation/images/baemin.png"
        alt="baemin"
        width="100%"
      />
      <Gallery />
      <Map />
      <Account />
    </MainLayout>
  );
}

export default App;
