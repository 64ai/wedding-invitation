import {Account, Gallery, Header, Intro, Map} from './views';
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
        <Gallery />
        <Map />
        <Account />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
