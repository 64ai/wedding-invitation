import {Account, Gallery, Header, Intro, Map, Story} from './views';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
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
}

export default App;
