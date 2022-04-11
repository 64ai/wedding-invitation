import {Account, Gallery, Header, Intro, Map, Story, Warning} from './views';
import {MainLayout} from './layouts';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const App = ()=> {
  return (
    <ThemeProvider theme={theme}>
      <Warning />
      <MainLayout>
        <Header />
        <Intro />
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
