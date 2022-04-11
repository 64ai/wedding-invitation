import {Account, Gallery, Header, Intro, Map, Story} from './views';
import {MainLayout} from './layouts';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';
import {useRef} from 'react';
import {useInView} from 'react-intersection-observer';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const App = ()=> {
  const option = {
    rootMargin: '-54px',
    threshold: 0,
  };
  const [introRef, inView] = useInView(option);

  console.log({inView});
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Header />
        <Intro ref={introRef} />
        <Story />
        <img
          src="/wedding-invitation/images/baemin.png"
          alt="baemin"
          width="100%"
        />
        <Gallery />
        <Map />
        <Account />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
